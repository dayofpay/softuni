const router = require("express").Router();

const cubeServices = require('../services/cubeServices');

router.get('/',(req,res) => {
    res.render('index',{cubeData : cubeServices.listCubes()})
})

router.get("/about", (req, res) => {
  res.render("about");
});

router.get('/create',(req,res) => {
    res.render('create');
})
module.exports = router;