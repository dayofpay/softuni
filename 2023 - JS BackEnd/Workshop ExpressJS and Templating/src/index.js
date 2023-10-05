const express = require('express');
const app = express();
const PORT = 5500;
const handlebarsConfig_INIT = require('./config/handlebarsConfig');
const expressConfig_INIT = require('./config/expressConfig');
const controllers = require('./controllers/controllers');
handlebarsConfig_INIT(app);
expressConfig_INIT(app,express);
app.get('/',controllers.HOME_CONTROLLER);
app.get('/about',controllers.ABOUT_CONTROLLER);
app.get('/create',controllers.CREATE_CONTROLLER);
app.listen(PORT,() => {
    console.log('Server is running on port ' + PORT);
})

