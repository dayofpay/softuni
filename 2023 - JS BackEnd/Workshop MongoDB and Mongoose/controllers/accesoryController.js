const router = require("express").Router();
const accessoryService = require('../services/accesoryService');
const cubeService = require('../services/cubeServices');
router.get("/create", (req, res) => {
  res.render("accesory/create");
});

router.post("/create", async (req, res) => {
  const { Name, Description, image_Url } = req.body;

  await accessoryService.create({ Name, Description, image_Url });

  console.log(`Successfully created Accessory ${Name} !`);
  res.redirect("/");
});


router.get("/attach/:id", async (req, res) => {
  const { id } = req.params;


  const cube = await cubeService.getSingleCube(id).lean();
  const accessories = await accessoryService.getWithoutOwned(cube.accessories).lean();
  const hasAccessories = accessories.length > 0;
  res.render("accesory/attach", { cube, accessories, hasAccessories });
});


router.post("/attach/:id", async (req, res) => {
  const { id } = req.params;
  const { accessory: accessoryId } = req.body;
  try {
    const cube = await cubeService.getSingleCube(id);

    await accessoryService.attachCube(id, accessoryId);


    if (!cube.accessories.includes(accessoryId)) {
      cube.accessories.push(accessoryId);
      await cube.save();
    }

    console.log(`Cube attached to accessory: ${cube.name}`);
    res.redirect(`/cubes/${accessoryId}/details`);
  } catch (error) {
    console.error(error);
  }
});





module.exports = router;