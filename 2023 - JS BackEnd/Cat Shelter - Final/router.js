const fs = require('fs');
const path = require('path');
const urlData = require('url');
const variables = require('./views/utils/variables');
const handleAddCat = require('./handlers/addCat');
const handleAddBreed = require('./handlers/addBread');
const handleShowCatDetails = require('./handlers/showCatDetails');
const handleShowCatShelter = require('./handlers/showCatShelter');
const deleteCat = require('./handlers/shelterCat');
let catData = require('./cache/cache');
const editCat = require('./handlers/editCat');
const urlList = {
    "/": {
        contentType: 'text/html',
        contentPath: path.join(__dirname, 'views', 'home', 'index.html'),
        supportedMethods: ['GET'],
    },
    "/cats/add-cat": {
        contentType: 'text/html',
        contentPath: path.join(__dirname, 'views', 'addCat.html'),
        supportedMethods: ['GET', 'POST'],
    },
    "/cats/add-breed": {
        contentType: 'text/html',
        contentPath: path.join(__dirname, 'views', 'addBreed.html'),
        supportedMethods: ['GET', 'POST'],
    },
    "/content/styles/site.css": {
        contentType: 'text/css',
        contentPath: path.join(__dirname, 'content', 'styles', 'site.css'),
        supportedMethods: ['GET'],
    },
    "/cats/content/styles/site.css" : {
        contentType: 'text/css',
        contentPath: path.join(__dirname, 'content', 'styles', 'site.css'),
        supportedMethods: ['GET'], 
    },
    "/content/javascript/index.js": {
        contentType: 'text/javascript',
        contentPath: path.join(__dirname, 'content', 'javascript', 'index.js'),
        supportedMethods: ['GET'],
    },
    "/content/javascript/addCat.js": {
        contentType: 'text/javascript',
        contentPath: path.join(__dirname, 'content', 'javascript', 'addCat.js'),
        supportedMethods: ['GET'],
    },
};





function handleRequest(url, res, req) {
    const route = urlList[url];
    const REQUEST_METHOD = req.method;
    const pathName = urlData.parse(req.url).pathname;
    if(pathName.includes('edit-cat') && REQUEST_METHOD === 'GET'){
        const catId = pathName.split('/')[3];
        catData.currentCatId = catId;
        console.log(catData.currentCatId);
        return handleShowCatDetails(req,res,catId);
    }
    else if(pathName.includes('new-home') && REQUEST_METHOD === 'GET'){
        const catId = pathName.split('/')[3];
        catData.currentCatId = catId;
        return handleShowCatShelter(req,res,catId);
    }
    else if(REQUEST_METHOD === 'PUT' && url === '/cats/edit-cat/'){
        editCat(req,res);
    }

    else if(REQUEST_METHOD === 'DELETE' && url === '/cats/shelter-cat/'){
        deleteCat(req,res);
    }
    if (route) {
        if (route.supportedMethods.includes(REQUEST_METHOD)) {
            if (REQUEST_METHOD === 'POST' && url === '/cats/add-cat') {
                handleAddCat(req, res);
            } else if (REQUEST_METHOD === 'POST' && url === '/cats/add-breed') {
                handleAddBreed(req, res);
            }
             else {
                fs.readFile(route.contentPath, 'utf-8', (err, data) => {
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
                            'Content-Type': route.contentType
                        });
                        res.write(modifiedHtml);
                        res.end();
                    }
                });
            }
        } else {
            res.writeHead(405, {
                'Content-Type': 'text/plain'
            });
            res.write('This method is not allowed for this URL');
            res.end();
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.write('404 Not Found :X');
        res.end();
    }
}
module.exports = handleRequest;