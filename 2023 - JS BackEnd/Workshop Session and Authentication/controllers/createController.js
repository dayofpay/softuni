// This router wont be used anymore ! ! !

const router = require('express').Router();



router.get('/create',(req,res) => {

    isAuth(req,res,next);
    res.render('cubes/create');
})

module.exports = router;