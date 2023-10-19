const homeController = require('./homeController');

const aboutController = require('./aboutController');
const createController = require('./createController');
const nonExistingRoute = require('./nonExistingRoute');
const cubeController = require('./cubeController');
const accessoriesController = require('./accesoryController');
const authController = require('./authController');
const controllerList = {
    'HOME_CONTROLLER' : homeController,
    'ABOUT_CONTROLLER' : aboutController,
    'CREATE_CONTROLLER' : createController,
    'NON_EXISTING_ROUTE' : nonExistingRoute,
    'CUBES_CONTROLLER' : cubeController,
    'ACCESORIES_CONTROLLER' : accessoriesController,
    'AUTH_CONTROLLER' : authController,

}
module.exports = controllerList;