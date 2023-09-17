const config = require('../config/env');

function generateBreedId(breedJSON){
    const timestamp = Date.now();

    return `${config.HANDLER_SETTINGS.BREED_PREFIX}${timestamp}`;
}


module.exports = generateBreedId;