// This router wont be used anymore ! ! !

const router = require('express').Router();



router.get('/create',(req,res) => {
    res.render('create');
})

module.exports = router;