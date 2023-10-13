const router = require('express').Router();


const controllerList = require('./controllers/controllers');

router.use(controllerList.HOME_CONTROLLER);
router.use("/cubes", controllerList.CUBES_CONTROLLER);

router.get("*", (req, res) => {
  res.redirect("/404");
});



module.exports = router;