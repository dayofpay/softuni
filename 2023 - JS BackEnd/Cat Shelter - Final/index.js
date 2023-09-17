const http = require('http');
const config = require('./config/env');
const port = config.APPLICATION_PORT
const handleRequest = require('./router.js');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const { url } = req;
    handleRequest(url, res,req);
});

server.listen(port, () => console.log('Server is running on port ' + port));
