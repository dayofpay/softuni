const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

        // Schema

        const UserSchema = new mongoose.Schema({
            username : String,
            password: String,
        });
        

    UserSchema.pre('save',async function(){
        const hash = await bcrypt.hash(this.password,10);
        this.password = hash;
    })



const User = mongoose.model('User',UserSchema);


module.exports = User;
