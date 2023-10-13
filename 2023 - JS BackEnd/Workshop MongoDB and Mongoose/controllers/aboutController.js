// This router wont be used anymore ! ! !

const router = require('express').Router();

const methods = require('../database/methods');

router.get('/about',async (req,res) => {
    const aboutData = await methods.getAbout();

    console.log(aboutData);
    res.render('about',{aboutData});
})

module.exports = router;