const router = require('express').Router();


const controllerList = require('./controllers/controllers');

router.get('/',controllerList.HOME_CONTROLLER);

router.get('/create',controllerList.CREATE_CONTROLLER);

router.get('/about',controllerList.ABOUT_CONTROLLER);

router.get('*',controllerList.NON_EXISTING_ROUTE);


module.exports = router;