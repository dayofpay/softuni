const fs = require('fs');
const config = require('../config/env');

function resetCatsDatabase() {
  try {
    const catsDataPath = `./data/${config.DATABASE_SETTINGS.DATA_LIST.CATS}`;
    const defaultCatsPath = `./data/${config.DATABASE_SETTINGS.DATA_LIST.DEFAULT_SETTINGS.CATS}`;

    const getDefaultValues_CATS = fs.readFileSync(defaultCatsPath, 'utf-8');
    const defaultCatData = JSON.parse(getDefaultValues_CATS);

    fs.writeFileSync(catsDataPath, JSON.stringify(defaultCatData));

    console.log('Database "cats" was factory reset');
  } catch (error) {
    console.error('Error resetting the database:', error);
  }
}


resetCatsDatabase();
module.exports = resetCatsDatabase;
