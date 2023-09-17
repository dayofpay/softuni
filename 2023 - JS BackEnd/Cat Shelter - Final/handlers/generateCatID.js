const config = require('../config/env');


function generateUniqueCatId(catJSON) {
    const timestamp = Date.now();
    return `${config.HANDLER_SETTINGS.CAT_PREFIX}${timestamp}`;
}




module.exports = generateUniqueCatId;