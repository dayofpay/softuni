const mongoose = require('mongoose');

        // Schema

const userSchema = new mongoose.Schema({
    'first_name' : String,
    'last_name' : String,
    'email' : String,
    'password' : String,
});



const User = mongoose.model('User',userSchema);

// Methods


userSchema.methods.listUsers = function(){
    console.log(`Person #${this.email}`);
}

// Virtual Properties


userSchema.virtual('description').get(function(){
    return `Person name: ${this.first_name}, last name: ${this.last_name}`
});


// Static Methods


userSchema.static('getPersonCollection',function(email){
    return this.find({email});
})

module.exports = User;
