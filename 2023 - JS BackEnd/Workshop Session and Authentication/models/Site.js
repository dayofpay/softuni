const mongoose = require('mongoose');

        // Schema

        const aboutSchema = new mongoose.Schema({
            title: String,
            about_info: String,
        }, {
            sanitizeHtml: false,
        });
        



const About = mongoose.model('About',aboutSchema);


module.exports = About;
