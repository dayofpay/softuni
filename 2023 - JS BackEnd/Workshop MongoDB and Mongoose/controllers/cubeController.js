

const router = require('express').Router();

const cubeServices = require('../services/cubeServices');

const utils = require('../utils/generateQniqueId');
router.get("/:cubeId/details", async (req, res) => {
    const { cubeId } = req.params;
    const cubeData = await cubeServices.getCubeData(cubeId);
    if(cubeData !== 'Invalid Cube'){
        console.log(cubeData);
        res.render("details", cubeData);
    }
    else{
        res.render("404");
    }
  });


router.post('/create',(req,res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    cubeServices.createCube({
        name,
        description,
        image_Url: imageUrl,  
        diff_level: difficultyLevel, 
    });
    res.redirect('/');
})
module.exports = router;