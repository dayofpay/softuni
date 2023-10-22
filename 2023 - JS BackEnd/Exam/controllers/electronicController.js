

const router = require("express").Router();
const {protectedRoute} = require('../middlewares/auth');
const electronicServices = require('../services/electronicServices');
const Electronic = require('../models/Electronic');
const mongoose = require('mongoose')
router.get('/catalog', async (req, res) => {
  const getElectronics = await electronicServices.getElectronics();
  const mapped = JSON.stringify(getElectronics);
    res.render('electronic/catalog',{electronic:JSON.parse(mapped)});
  });


router.get('/create',protectedRoute,async(req,res) => {
  res.render('electronic/create');
})
router.post('/create',protectedRoute,async (req,res) => {
  // const {name,type,production,expoitation,damages,image,price,description} = req.body;


  // electronicServices.createElectronic({name,type,production,expoitation,damages,image,price,description});

  try {
    const {name,type,production,exploitation,damages,image,price,description} = req.body;


    const newElectronic = new Electronic({
      name,
      type,
      production,
      exploitation,
      damages,
      image,
      price,
      description,
      owner : req.user._id
    });


    await newElectronic.save();


    res.redirect('/');

  } catch (error) {
    console.error('Error creating electronic:', error);
    res.status(500).render('electronic/create',{hasError:true,errorMessage:error})
  }
})


router.get('/details/:id', async (req, res) => {
  const electronicId = req.params.id;
  const electronicData = await electronicServices.getElectronicData(electronicId);

  if (electronicData) {
    const userId = req.user && req.user._id ? new mongoose.Types.ObjectId(req.user._id) : null;

    const isOwner = userId && userId.equals(electronicData.owner);


    let hasPurchased = false;
    if (userId) {
      for (const purchase of electronicData.buyingList) {
        if (purchase.userId.equals(userId)) {
          hasPurchased = true;
          break;
        }
      }
    }

    res.render('electronic/details', {
      electronicData,
      isOwner,
      hasPurchased,
    });
  } else {
    res.render('errors/404');
  }
});







router.post('/buy/:id', protectedRoute, async (req, res) => {
  try {
    const electronicId = req.params.id;
    const userId = req.user._id;


    const electronic = await Electronic.findById(electronicId);

    if (!electronic) {

      return res.status(404).json({ message: 'Electronic item not found' });
    }


    if (electronic.owner.equals(userId)) {

      return res.status(403).json({ message: 'You cannot buy your own electronic item' });
    }


    const isAlreadyBought = electronic.buyingList.some((user) => user.userId.equals(userId));

    if (isAlreadyBought) {

      return res.status(400).json({ message: 'You have already bought this electronic item' });
    } else {

      electronic.buyingList.push({ userId });
      await electronic.save();


      return res.status(200).json({ message: 'Thank you for your purchase' });
    }
  } catch (error) {
    console.error('Error buying electronic:', error);
    res.status(500).json({ message: 'Error buying electronic' });
  }
});



router.delete('/delete/:id',protectedRoute, async (req,res) => {
  const electronicId = req.params.id;
  const electronicData = await electronicServices.getElectronicData(electronicId);


  const userId = req.user && req.user._id ? new mongoose.Types.ObjectId(req.user._id) : null;


  const isOwner = userId && userId.equals(electronicData.owner);


  if(!isOwner){
    res.redirect('/',{hasError:true,errorMessage:'You are not allowed to manage this electronic !'});

    return;
  }


 const result= await electronicServices.deleteElectronic(electronicId);

  res.send(result).status(200);
});



router.get('/edit/:id',protectedRoute, async(req,res) => {
  const electronicId = req.params.id;
  const electronicData = await electronicServices.getElectronicData(electronicId);


  const userId = req.user && req.user._id ? new mongoose.Types.ObjectId(req.user._id) : null;


  const isOwner = userId && userId.equals(electronicData.owner);


  if (!isOwner) {
    res.render('index', { hasError: true, errorMessage: 'You are not allowed to manage this electronic !' });
  }
  


  res.render('electronic/edit',{
    electronicData : electronicData,
  });
});



router.put('/edit/:id',protectedRoute,async(req,res) => {
  const electronicId = req.params.id;
  const electronicData = await electronicServices.getElectronicData(electronicId);


  const userId = req.user && req.user._id ? new mongoose.Types.ObjectId(req.user._id) : null;


  const isOwner = userId && userId.equals(electronicData.owner);

  console.log(true);
  if (!isOwner) {
    res.render('index', { hasError: true, errorMessage: 'You are not allowed to manage this electronic !' });
  }

  const {name,type,production,exploitation,damages,image,price,description} = req.body;
  const updateElectronic = await electronicServices.updateElectronic(electronicId,{name,type,production,exploitation,damages,image,price,description});


  res.json(updateElectronic).status(200);
});






router.get('/search', protectedRoute, async (req, res) => {
  const { name, type } = req.query;

  try {
    let electronicData;

    if (name && type) {

      electronicData = await electronicServices.getSpecificElectronicData({
        $and: [
          { name: { $regex: new RegExp(name, 'i') } },
          { type: { $regex: new RegExp(type, 'i') } },
        ],
      });
    } else if (name) {

      electronicData = await electronicServices.getSpecificElectronicData({
        name: { $regex: new RegExp(name, 'i') },
      });
    } else if (type) {

      electronicData = await electronicServices.getSpecificElectronicData({
        type: { $regex: new RegExp(type, 'i') },
      });
    } else {

      electronicData = await electronicServices.getSpecificElectronicData({});
    }

    if (electronicData.length > 0) {
      const mapped = JSON.stringify(electronicData);
      res.render('electronic/search', { electronicData: JSON.parse(mapped) });
    } else {
      res.render('electronic/search', { noMatchFound: true });
    }
  } catch (error) {
    console.error('Error while searching for electronics:', error);
    res.render('electronic/search', { error: 'Error while searching for electronics' });
  }
});

module.exports = router;