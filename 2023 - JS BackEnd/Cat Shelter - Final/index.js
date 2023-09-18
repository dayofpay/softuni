const http = require('http');
const config = require('./config/env');
const port = config.APPLICATION_PORT
const handleRequest = require('./router');
const resetCatsDatabase = require('./services/resetCats');
let is_reset = false;
const server = http.createServer((req, res) => {
    console.log(req.url);
    const { url } = req;

    if(config.DATABASE_SETTINGS.FACTORY_RESET.CATS && !is_reset){
        resetCatsDatabase();
        is_reset = true;
    }
    handleRequest(url, res,req);
});

server.listen(port, () => console.log('Server is running on port ' + port));
