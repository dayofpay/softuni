const fs = require('fs');
const catData = require('../data/cats.json');

function getCatData(catId) {
    console.log(catId);

    const cat = catData.find(cat => cat.id === catId);

    if (cat) {
        return cat;
    } else {
        return {"ERROR" : 'Invalid Cat'};
    }
}

module.exports = getCatData;