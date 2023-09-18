const fs = require('fs');
const variables = require('../views/utils/variables');
function handleShowCatDetails(req, res,catId) {
    fs.readFile('./views/editCat.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.write('Internal Server Error');
            res.end();
        } else {
            const keys = Object.keys(variables);
            let modifiedHtml = data;

            keys.forEach((key) => {
                const pattern = new RegExp(key, 'g');
                modifiedHtml = modifiedHtml.replace(pattern, variables[key]);
            });

            res.writeHead(200, {
                'Content-Type': 'text/html',
            });
            res.write(modifiedHtml);
            res.end();
        }
    });
}


module.exports = handleShowCatDetails;