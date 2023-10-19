const router = require('express').Router();


router.get('/register',async (req,res) => {
    res.render('auth/register');
})

router.get('/login',async (req,res) => {
    res.render('auth/login');
})


module.exports = router;