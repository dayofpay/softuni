const router = require("express").Router();
const {protectedRoute} = require('../middlewares/auth');
const Animal = require('../models/Animal');

router.get('/create',protectedRoute,async (req,res) => {
    res.render('animals/create');
    
})


router.post('/create', protectedRoute, async (req, res) => {
    try {
      const {
        name,
        years,
        kind,
        image,
        need,
        location,
        description
      } = req.body;
  

      const newAnimal = new Animal({
        name,
        years,
        kind,
        image,
        need,
        location,
        description
      });
  

      await newAnimal.save();
  

      res.redirect('/');
  
    } catch (error) {
      console.error('Error creating animal:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;