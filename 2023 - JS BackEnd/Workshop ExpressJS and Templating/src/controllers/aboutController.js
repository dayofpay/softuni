// This router wont be used anymore ! ! !

const router = require('express').Router();



router.get('/about',(req,res) => {
    res.render('about');
})

module.exports = router;