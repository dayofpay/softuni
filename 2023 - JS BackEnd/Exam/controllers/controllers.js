const homeController = require('./homeController');
const authController = require('./authController');
const electronicsController = require('./electronicController');
const controllerList = {
    'HOME_CONTROLLER' : homeController,
    'AUTH_CONTROLLER' : authController,
    'ELECTRONIC_CONTROLLER' : electronicsController,

}
module.exports = controllerList;