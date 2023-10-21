const router = require("express").Router();
const {protectedRoute,preventAuthenticatedUser} = require('../middlewares/auth');
const userServices = require('../services/userServices');
const appConfig = require('../config/app')


router.get('/logout',protectedRoute,async(req,res) => {
    res.clearCookie("auth");
    res.redirect("/");
})




router.get('/login',preventAuthenticatedUser,async (req,res) => {
    res.render('auth/login');
});


router.post('/login',preventAuthenticatedUser, async (req, res) => {
    const { username, password } = req.body;
    const token = await userServices.login(username, password);

    if (token === appConfig.APP_CONFIG.LOCALES.ERRORS.INVALID_PASSWORD) {
        console.log("Invalid username or password.");
        res.render('auth/login', {hasError:true, errorMessage: appConfig.APP_CONFIG.LOCALES.ERRORS.INVALID_PASSWORD });
        return;
    }

    console.log(token);
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/");
});
router.get('/register',preventAuthenticatedUser, async(req,res) => {
    res.render('auth/register');
});




router.post('/register',preventAuthenticatedUser,async(req,res) => {
    let { email,password,repeatPassword } = req.body;
     if (password === repeatPassword) {
         const token = await userServices.createUser({ email,password });
         if (token === 'User already exists') {
             console.log('User already exists');
             res.render('auth/register', {hasError:true, errorMessage: 'User already exists' });
        } else {
             res.cookie('auth', token, { httpOnly: true });
             res.redirect('/');
         }
     } else {
     console.log('Passwords do not match');
         res.render('auth/register', { errorMessage: 'Passwords do not match' });
     }
})

module.exports = router;