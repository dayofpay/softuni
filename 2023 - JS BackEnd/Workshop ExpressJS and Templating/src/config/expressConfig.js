const path = require('path');

const expressConfig = (app,express) => {
    app.use(express.static(path.resolve(__dirname,'../public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}


module.exports = expressConfig;