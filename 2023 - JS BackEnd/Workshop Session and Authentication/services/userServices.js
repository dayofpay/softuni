const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../database/config');
async function createUser(userData){

    // Check if the user already exists


    const userExists = await User.find({username:userData.username}).exec();
    console.log(userExists.length);
    if(userExists.length >= 1){
        return 'User already exists';
    }
    const user = await User.create(userData);
    const payload = {
      _id: user._id,
      username: user.username,
    };
  
    const token = await jwt.sign(payload, config.JWT.SECRET_TOKEN, { expiresIn: "3d" });


    console.log('User Created !');
    return token;
}


async function login(username,password){
    const user = await User.findOne({ username });

    // validate username
    if (!user) {
      return "Invalid username or password!";
    }
  
    // validate password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return "Invalid username or password!";
    }

    console.log(isValid);
    const payload = {
      _id: user._id,
      username: user.username,
    };
  
    const token = await jwt.sign(payload, config.JWT.SECRET_TOKEN, { expiresIn: "3d" });
  
    return token;
}


module.exports = {
    createUser : createUser,
    login : login,
}