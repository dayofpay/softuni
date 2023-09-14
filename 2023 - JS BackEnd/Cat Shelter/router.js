

const homeHtml = require('./views/home/index.js');
const homeCss = require('./content/styles/site.js');

const urlList = {
    "/": {
        contentType: 'text/html',
        content: homeHtml,
    },
    "/content/styles/site.css": {
        contentType: 'text/css',
        content: homeCss,
    },
};

function handleRequest(url, res) {
    const route = urlList[url];
    if (route) {
        res.writeHead(200, { 'Content-Type': route.contentType });
        res.write(route.content);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
}

module.exports = handleRequest;
