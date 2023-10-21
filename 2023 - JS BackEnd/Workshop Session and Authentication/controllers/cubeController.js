const router = require('express').Router();
const cubeService = require('../services/cubeServices');
const {isAuth} = require('../middlewares/auth');
const { difficultyLevelOptionsViewData } = require("../utils/viewData");
router.get("/:cubeId/details", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getSingleCube(cubeId).lean();

  if (!cube) {
    res.redirect("/404");
    return;
  }

  const hasAccessories = cube.accessories?.length > 0;
  const isOwner = req.user ? cube.creatorId === req.user._id : false;
  res.render("cubes/details", { cube, hasAccessories,isOwner });
});


router.post('/create', async (req, res) => {

  isAuth(req,res);
  const { name, description, image_url, difficulty_level } = req.body;
  console.log({      name: name,
    description: description,
    image_Url: image_url,
    diff_level: Number(difficulty_level),
    creatorId: req.user._id});
  try {
    await cubeService.createCube({
      name: name,
      description: description,
      image_Url: image_url,
      diff_level: Number(difficulty_level),
      creatorId: req.user._id
    });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.render("error", { errorMessage: "Failed to create a cube." });
  }
});


router.get("/edit/:id",async (req,res) => {
  const {id} = req.params;

  const cubeInfo = await cubeService.getCubeData(id);
  console.log(cubeInfo);
  res.render("accesory/edit", {
    name: cubeInfo.name,
    image_Url: cubeInfo.image_Url,
    description: cubeInfo.description,
    diff_level: cubeInfo.diff_level
  });
});


router.get("/:cubeId/delete",async (req,res) => {
  const {cubeId} = req.params;
  const cube = await cubeService.getSingleCube(cubeId).lean();

  if (!cube) {
    res.redirect("/404");
    return;
  }

  const hasAccessories = cube.accessories?.length > 0;
  const isOwner = req.user ? cube.creatorId === req.user._id : false;
  const options = difficultyLevelOptionsViewData(cube.diff_level);


  if(isOwner){
    res.render("cubes/delete", { cube, hasAccessories,isOwner,options });
  }else{
    res.status(403).redirect('/403');
  }
})
router.post("/update",async(req,res) => {

  const { name, description, image_url, difficulty_level } = req.body;




  res.redirect('/');
})

module.exports = router;
