const router = require('express').Router();


const controllerList = require('./controllers/controllers');

router.use(controllerList.HOME_CONTROLLER);
router.use("/auth",controllerList.AUTH_CONTROLLER);
router.use("/animals",controllerList.ANIMAL_CONTROLLER);
router.get("*", (req, res) => {
  res.redirect("/404");
});



module.exports = router;