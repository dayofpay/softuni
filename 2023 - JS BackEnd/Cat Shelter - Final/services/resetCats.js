const fs = require('fs');
const config = require('../config/env');

function resetCatsDatabase() {

    let getDefaultValues_CATS = fs.readFileSync('./data/' + config.DATABASE_SETTINGS.DATA_LIST.DEFAULT_SETTINGS.CATS, 'utf-8');


    let defaultCatData = JSON.parse(getDefaultValues_CATS);


    fs.writeFileSync('./data/' + config.DATABASE_SETTINGS.DATA_LIST.CATS, JSON.stringify(defaultCatData));

    console.log('Database "cats" was factory reset');
}

module.exports = resetCatsDatabase;
