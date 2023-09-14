const http = require('http');
const port = 7953;
const handleRequest = require('./router.js');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const { url } = req;
    handleRequest(url, res);
});

server.listen(port, () => console.log('Server is running on port ' + port));
