const router = require('express').Router();
const cubeService = require('../services/cubeServices');
const accessoryService = require('../services/accesoryService');
const utils = require('../utils/generateQniqueId');

router.get("/:cubeId/details", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getSingleCube(cubeId).lean();

  if (!cube) {
    res.redirect("/404");
    return;
  }

  const hasAccessories = cube.accessories?.length > 0;
  res.render("details", { cube, hasAccessories });
});


router.post('/create', async (req, res) => {
  const { name, description, image_url, difficulty_level } = req.body;

  try {
    await cubeService.createCube({
      name: name,
      description: description,
      image_Url: image_url,
      diff_level: Number(difficulty_level),
    });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.render("error", { errorMessage: "Failed to create a cube." });
  }
});

module.exports = router;
