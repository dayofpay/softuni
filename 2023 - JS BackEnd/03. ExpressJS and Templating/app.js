const express = require('express');

const app = express();
// Initialize Handlebars

const exphbs = require('express-handlebars');

const handlebars = exphbs.create({extname:'.hbs'});
const port = 7953;


// Setup handlebars
app.engine('.hbs',handlebars.engine);
app.set('view engine','.hbs');
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use('/static', express.static(__dirname + '/public'))
// ! Setup handlebars !

app.get('/home',(req,res) => {
    res.render('main',{layout:'main'});
})

app.listen(port);