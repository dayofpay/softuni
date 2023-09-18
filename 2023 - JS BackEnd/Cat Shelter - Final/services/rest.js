const path = require('path');

const restServices = {
    // TODO
    "/cats/delete-cat/:{{ID}}": {
        action: null, //TODO
        supportedMethods: ['DELETE'],
    },
    "/cats/edit-cat": {
        contentType: 'text/html',
        contentPath: '../views/editCat.html',
        supportedMethods: ['GET', 'PUT'],
    },
    // TODO
}


module.exports = restServices;