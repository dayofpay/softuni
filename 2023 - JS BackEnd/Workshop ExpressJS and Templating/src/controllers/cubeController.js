

const router = require('express').Router();

const cubeServices = require('../services/cubeServices');

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

module.exports = router;