const path = require('path');

const expressConfig = (app,express) => {
    app.use(express.static(path.resolve(__dirname,'../public')));
}


module.exports = expressConfig;