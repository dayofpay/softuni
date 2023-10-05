

const router = require('express').Router();

const cubeServices = require('../services/cubeServices');

const utils = require('../utils/generateQniqueId');
router.get("/:cubeId/details", (req, res) => {
    const { cubeId } = req.params;
    const cubeData = cubeServices.getCubeData(cubeId);
    if(cubeData !== 'Invalid Cube'){
        res.render("details", { ...cubeData});
    }
    else{
        res.render("404");
    }
  });


router.post('/create',(req,res) => {
    const {name,description,imageUrl,difficultyLevel} = req.body;

    cubeServices.createCube({
        name,
        description,
        image_url : imageUrl,
        diff_level : difficultyLevel,
        id: utils.generateId({length:32,useLetters:true}),
    });
    res.redirect('/');
})
module.exports = router;