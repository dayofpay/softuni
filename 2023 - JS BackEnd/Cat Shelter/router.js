

const homeHtml = require('./views/home/index.js');
const homeCss = require('./content/styles/site.js');
const addCatBreedHtml = require('./views/addBreed.js');
const addCatHtml = require('./views/addCat.js');
const catShelterHtml = require('./views/catShelter.js');
const editCatHtml = require('./views/editCat.js');
const { variableData, replacePlaceholders } = require('./placeholders.js');
const urlList = {
    "/": {
        contentType: 'text/html',
        content: homeHtml,
    },
    '/cats/add-breed' : {
        contentType : 'text/html',
        content : addCatBreedHtml,
    },
    '/cats/add-cat' : {
        contentType : 'text/html',
        content : addCatHtml,
    },
    '/cats/shelter' : {
        contentType : 'text/html',
        content : catShelterHtml,
    },
    '/cats/edit-cat' : {

        contentType : 'text/html',
        content : editCatHtml,
    },
    "/content/styles/site.css": {
        contentType: 'text/css',
        content: homeCss,
    },
};

function handleRequest(url, res) {
    const route = urlList[url];
    if (route) {

        const htmlTemplate = replacePlaceholders(route.content, variableData);
        res.writeHead(200, { 'Content-Type': route.contentType });
        res.write(htmlTemplate);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found :X');
        res.end();
    }
}

module.exports = handleRequest;
