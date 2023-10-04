const express = require('express');

const handlebars = require('express-handlebars');

const app = express();

const PORT = 5500;

const path = require('path');


// > Handlebars config <

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));

app.set('view engine', 'hbs');

app.set('views', 'views');

app.use(express.static(path.resolve(__dirname,'public')));

// ! Handlebars config !
app.get('/',(req,res) => {
    res.render("index"); // That will render the index.hbs file from views/index.hbs
});

app.listen(PORT,() => {
    console.log('Server is running on port ' + PORT);
})

