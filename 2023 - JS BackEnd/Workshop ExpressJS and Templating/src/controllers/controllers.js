const homeController = require('./homeController');

const aboutController = require('./aboutController');
const createController = require('./createController');
const controllerList = {
    'HOME_CONTROLLER' : homeController,
    'ABOUT_CONTROLLER' : aboutController,
    'CREATE_CONTROLLER' : createController,
}
module.exports = controllerList;