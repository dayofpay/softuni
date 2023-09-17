const querystring = require('querystring');
const generateBreedId = require('./generateBreedID');
const fs = require('fs');
const config = require('../config/env');
function handleAddBreed(req, res) {
    let formData = '';

    req.on('data', (chunk) => {
        formData += chunk;
    });

    req.on('end', () => {
        const parsedData = querystring.parse(formData);
        const catData = fs.readFileSync('./data/' + config.DATABASE_SETTINGS.DATA_LIST.BREEDS);
        let breedJSON = JSON.parse(catData);
        console.log(formData);
        const newBreedId = generateBreedId(breedJSON);

        const newBreed = {
            id: newBreedId,
            breed: parsedData.breed,
        };


        breedJSON.push(newBreed);

        fs.writeFileSync('./data/' + config.DATABASE_SETTINGS.DATA_LIST.BREEDS, JSON.stringify(breedJSON));
        res.writeHead(302, { Location: config.URL_LIST.ROOT }); // Redirect to the home page
        res.end();
    });
}


module.exports = handleAddBreed;