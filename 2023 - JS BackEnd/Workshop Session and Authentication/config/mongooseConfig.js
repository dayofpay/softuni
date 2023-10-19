const mongoose = require('mongoose');
const settings = require('../config/database');
const methods = require('../database/methods')
async function connect(){

    await mongoose.connect(`mongodb://${settings.HOST}:${settings.PORT}/${settings.DATABASE_NAME}`);
    console.log('Connection success !');

   methods.setAbout({'title' : 'About Cubicle','about_info' : `        <p>
    <i>"Cubicle"</i> is a place, where you can browse some of the most popular rubik cubes in the world and add
    some new cubes that
    you have discovered. This application was created as an exercise for the <a
      href="https://softuni.bg/trainings/2452/js-back-end-september-2019">JS Back-End course</a> at the
    <a href="https://softuni.bg/">Software University</a>.</p>`});

}


module.exports = connect