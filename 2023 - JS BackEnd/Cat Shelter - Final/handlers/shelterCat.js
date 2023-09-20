const fs = require('fs');
const catData = require('../data/cats.json');
const config = require('../config/env')
function shelterCat(req,res){

    let formData = '';

    req.on('data', (chunk) => {
        formData += chunk;
    });

    req.on('end',(data) => {
        const parsedData = JSON.parse(formData);
        console.log(parsedData);
        const catIndex = catData.findIndex((cat) => cat.id === parsedData.catId);

        if (catIndex !== -1) {
            catData.splice(catIndex, 1);

            fs.writeFileSync('./data/cats.json', JSON.stringify(catData));

            res.writeHead(302, { Location: config.URL_LIST.ROOT });
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write(`${config.LOCALES.DATABASE_QUERY_NOT_EXIST}`);
            res.end();
        }
    })

}

module.exports = shelterCat;