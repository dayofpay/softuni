const express = require('express');
const app = express();
const PORT = 5500;
const handlebarsConfig_INIT = require('./config/handlebarsConfig');
const expressConfig_INIT = require('./config/expressConfig');
const routes = require('./router')
handlebarsConfig_INIT(app);
expressConfig_INIT(app,express);

app.use(routes);

app.listen(PORT,() => {
    console.log('Server is running on port ' + PORT);
})

