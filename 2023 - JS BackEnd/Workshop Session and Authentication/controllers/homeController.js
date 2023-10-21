const router = require("express").Router();

const cubeServices = require('../services/cubeServices');
const Cube = require('../models/Cubes');
const aboutData = require('../database/methods');
const {isAuth} = require('../middlewares/auth')
router.get('/', async (req, res) => {

  const {
    search,
    from,
    to
  } = req.query;
  if (!search && !from && !to) {
    try {
      const cubeData = await cubeServices.listCubes();
      const mapped = JSON.stringify(cubeData);
      res.render('index', {
        cubeData: JSON.parse(mapped)
      })
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  }else{
    let result = await Cube.find({ name: search, diff_level: { $gte: from,$lte: to } }).exec();
    const mapped = JSON.stringify(result);
    res.render('index',{cubeData:JSON.parse(mapped)})
  }
});

router.get("/about", async (req, res,next) => {
  let data = await aboutData.getAbout();
  const mapped = JSON.stringify(data);
  res.render("about", {
    aboutData: JSON.parse(mapped)
  });
});

router.get('/create', (req, res) => {
  isAuth(req,res);
  res.render('cubes/create');
})
module.exports = router;