

const router = require("express").Router();
const {preventAuthenticatedUser,protectedRoute} = require('../middlewares/auth');

const userServices = require('../services/userServices');
router.get('/logout',protectedRoute, async(req,res) => {
  res.clearCookie("auth");
  res.redirect("/");
})
router.get('/login',preventAuthenticatedUser, async (req, res) => {
    res.render('auth/login');
});


router.post('/login',preventAuthenticatedUser, async(req,res) => {
  const { email, password } = req.body;
  const token = await userServices.login(email, password);

  if (token.hasOwnProperty('error')) {
      console.log("Invalid username or password.");
      res.render('auth/login', {hasError:true, errorMessage: token.error });
      return;
  }

  console.log(token);
  res.cookie("auth", token, { httpOnly: true });
  res.redirect("/");
})


router.get('/register',preventAuthenticatedUser,async (req,res) => {
  res.render('auth/register');
})


router.post('/register',preventAuthenticatedUser,async(req,res) => {
  let { email,password,repeatPassword,username } = req.body;
   if (password === repeatPassword) {
       const token = await userServices.createUser({ email,password,username });
       if (token.hasOwnProperty('error')) {
           console.log('User already exists');
           res.render('auth/register', {hasError:true, errorMessage: token.error });
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