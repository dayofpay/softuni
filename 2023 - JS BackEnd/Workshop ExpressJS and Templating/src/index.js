const express = require('express');


const app = express();

const PORT = 5500;

const path = require('path');

const handlebarsConfig_INIT = require('./config/handlebarsConfig');

const controllers = require('./controllers/controllers');

handlebarsConfig_INIT(app);

app.use(express.static(path.resolve(__dirname,'public')));


app.get('/',controllers.HOME_CONTROLLER);

app.get('/about',controllers.ABOUT_CONTROLLER);

app.get('/create',controllers.CREATE_CONTROLLER);


app.listen(PORT,() => {
    console.log('Server is running on port ' + PORT);
})

