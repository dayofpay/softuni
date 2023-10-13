const mongoose = require('mongoose');

        // Schema

const cubeSchema = new mongoose.Schema({
    'name' : String,
    'description' : String,
    'image_Url' : String,
    'diff_level' : String,
});



const Cube = mongoose.model('Cube',cubeSchema);


module.exports = Cube;
