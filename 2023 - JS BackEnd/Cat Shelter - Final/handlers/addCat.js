const querystring = require('querystring');
const generateUniqueCatId = require('./generateCatID');
const fs = require('fs');
const config = require('../config/env');

function handleAddCat(req, res) {
    let formData = '';

    req.on('data', (chunk) => {
        formData += chunk;
    });

    req.on('end', () => {
        const parsedData = querystring.parse(formData);
        const catData = fs.readFileSync('./data/' + config.DATABASE_SETTINGS.DATA_LIST.CATS);
        let catJSON = JSON.parse(catData);
        console.log(formData);
        const newCatId = generateUniqueCatId(catJSON);

        const newCat = {
            id: newCatId,
            name: parsedData.name,
            description: parsedData.description,
            imageUrl: parsedData.upload,
            breed: parsedData.breed,
        };


        catJSON.push(newCat);

        fs.writeFileSync('./data/' + config.DATABASE_SETTINGS.DATA_LIST.CATS, JSON.stringify(catJSON));
        res.writeHead(302, { Location: '/' });
        res.end();
    });
}


module.exports = handleAddCat;