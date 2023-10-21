const homeController = require('./homeController');
const authController = require('./authController');
const animalController = require('./animalController');
const controllerList = {
    'HOME_CONTROLLER' : homeController,
    'AUTH_CONTROLLER' : authController,
    'ANIMAL_CONTROLLER' : animalController,

}
module.exports = controllerList;