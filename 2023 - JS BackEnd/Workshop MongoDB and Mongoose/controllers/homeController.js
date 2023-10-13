const router = require("express").Router();

const cubeServices = require('../services/cubeServices');
const aboutData = require('../database/methods')
router.get('/', async (req, res) => {
  try {
      const cubeData = await cubeServices.listCubes();
      const mapped = JSON.stringify(cubeData);
      res.render('index',{cubeData: JSON.parse(mapped)})
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/about", async (req, res) => {
  let data = await aboutData.getAbout();
  const mapped = JSON.stringify(data);
  res.render("about",{aboutData: JSON.parse(mapped)});
});

router.get('/create',(req,res) => {
    res.render('create');
})
module.exports = router;