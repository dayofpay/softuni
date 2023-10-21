const router = require('express').Router();
const userServices = require('../services/userServices');
const appConfig = require('../config/app');
router.get('/register',async (req,res) => {
    res.render('auth/register');
})

router.post('/register', async (req, res) => {
    let { username, password, repeatPassword } = req.body;

    if (password === repeatPassword) {
        const token = await userServices.createUser({ username, password });
        if (token === 'User already exists') {
            console.log('User already exists');
            res.render('auth/register', { errorMessage: 'User already exists' });
        } else {
            res.cookie('auth', token, { httpOnly: true });
            res.redirect('/');
        }
    } else {
        console.log('Passwords do not match');
        res.render('auth/register', { errorMessage: 'Passwords do not match' });
    }
});

router.get('/login',async (req,res) => {
    res.render('auth/login');
})


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const token = await userServices.login(username, password);

    if (token === appConfig.APP_CONFIG.LOCALES.ERRORS.INVALID_PASSWORD) {
        console.log("Invalid username or password.");
        res.render('auth/login', { errorMessage: appConfig.APP_CONFIG.LOCALES.ERRORS.INVALID_PASSWORD });
        return;
    }

    console.log(token);
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/");
});


router.get("/logout", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
  });


module.exports = router;