const fs = require('fs');
const config = require('../config/env');

function resetBreeds() {

    let getDefaultValues_BREEDS = fs.readFileSync('./data/' + config.DATABASE_SETTINGS.DATA_LIST.DEFAULT_SETTINGS.BREEDS, 'utf-8');


    let defaultBreedsData = JSON.parse(getDefaultValues_BREEDS);


    fs.writeFileSync('./data/' + config.DATABASE_SETTINGS.DATA_LIST.BREEDS, JSON.stringify(defaultBreedsData));

    console.log('Database "breeds" was factory reset');
}
resetBreeds();
module.exports = resetBreeds;
