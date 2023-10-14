

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

  router.post('/create', async (req, res) => {
    const { name, description, image_url, difficulty_level } = req.body;
  
    try {
      await cubeServices.createCube({
        name : name,
        description : description,
        image_Url : image_url,
        diff_level : Number(difficulty_level),
      });
      res.redirect('/');
    } catch (error) {
      // Handle the error, e.g., send an error response or render an error page
      console.error(error);
      res.render("error", { errorMessage: "Failed to create a cube." });
    }
  });
  
module.exports = router;