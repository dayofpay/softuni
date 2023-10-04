const express = require('express');


const app = express();

const PORT = 5500;

const path = require('path');

const handlebarsConfig_INIT = require('./config/handlebarsConfig');


handlebarsConfig_INIT(app);

app.use(express.static(path.resolve(__dirname,'public')));


app.get('/',(req,res) => {
    res.render("index");
});

app.listen(PORT,() => {
    console.log('Server is running on port ' + PORT);
})

