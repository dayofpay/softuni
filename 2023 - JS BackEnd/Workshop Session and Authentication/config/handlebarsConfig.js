const expressHandlebars = require('express-handlebars'); // Correct the import statement

const handlebarsConfig = (app) => {

    const hbs = expressHandlebars.create({
        extname: '.hbs',
        helpers: {
          equals: function (a, b, options) {
              return a === b;
          },
          difficultyText: function (level) {
               console.log(level);

               switch (level) {
                   case 1:
                       return 'Very Easy';
                   case 2:
                       return 'Easy';
                   case 3:
                       return 'Medium (Standard 3x3)';
                   case 4:
                       return 'Intermediate';
                   case 5:
                       return 'Expert';
                   case 6:
                       return 'Hardcore';
                   default:
                       return 'Unknown';
               }
           }
      }
    });


    app.engine('hbs', hbs.engine);


    app.set('view engine', 'hbs');


    app.set('views', 'views');
}

module.exports = handlebarsConfig;
