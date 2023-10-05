const homeController = require('./homeController');

const aboutController = require('./aboutController');
const createController = require('./createController');
const nonExistingRoute = require('./nonExistingRoute');
const controllerList = {
    'HOME_CONTROLLER' : homeController,
    'ABOUT_CONTROLLER' : aboutController,
    'CREATE_CONTROLLER' : createController,
    'NON_EXISTING_ROUTE' : nonExistingRoute,
}
module.exports = controllerList;