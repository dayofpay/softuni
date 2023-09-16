const fs = require('fs');
const path = require('path');
const variables = require('./views/utils/variables');
const urlList = {
    "/": {
        contentType: 'text/html',
        contentPath: path.join(__dirname, 'views', 'home', 'index.html'),
        supportedMethods : ['GET'],
    },
    "/cats/add-cat": {
        contentType: 'text/html',
        contentPath: path.join(__dirname, 'views', 'addCat.html'),
        supportedMethods : ['GET','POST'],
    },
    "/cats/add-breed": {
        contentType: 'text/html',
        contentPath: path.join(__dirname, 'views', 'addBreed.html'),
        supportedMethods : ['GET','POST'],
    },
    "/content/styles/site.css": {
        contentType: 'text/css',
        contentPath: path.join(__dirname, 'content', 'styles', 'site.css'),
        supportedMethods : ['GET'],
    },
    "/content/javascript/index.js" : {
        contentType: 'text/javascript',
        contentPath: path.join(__dirname, 'content', 'javascript', 'index.js'),
        supportedMethods : ['GET'],
    },
    "/content/javascript/addCat.js" : {
        contentType: 'text/javascript',
        contentPath: path.join(__dirname, 'content', 'javascript', 'addCat.js'),
        supportedMethods : ['GET'],
    },
};
function handleRequest(url, res,req) {
    const route = urlList[url];
    const REQUEST_METHOD = req.method;
    if (route) {

        if (route.supportedMethods.includes(REQUEST_METHOD)) {
            if (REQUEST_METHOD === 'POST' && url === '/cats/add-cat') {
                handleAddCat(req, res);
            } else if (REQUEST_METHOD === 'POST' && url === '/cats/add-breed') {
                handleAddBreed(req, res);
            } else {
                fs.readFile(route.contentPath, 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.write('Internal Server Error');
                        res.end();
                    } else {
                        const keys = Object.keys(variables);
                        let modifiedHtml = data;
        
                        keys.forEach((key) => {
                            const pattern = new RegExp(key, 'g');
                            modifiedHtml = modifiedHtml.replace(pattern, variables[key]);
                        });
        
                        res.writeHead(200, { 'Content-Type': route.contentType });
                        res.write(modifiedHtml);
                        res.end();
                    }
                });
            }
        }
        else{
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.write('This method is not allowed for this URL');
            res.end();
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found :X');
        res.end();
    }
}
module.exports = handleRequest;
