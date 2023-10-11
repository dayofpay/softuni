const mongoose = require('mongoose');

const userModel = require('../models/User');
async function createUser(userData){

        // Create user 


        await userModel.create({
            'first_name' : userData.first_name,
            'last_name' : userData.last_name,
            'email' : userData.email,
            'password' : userData.password,
        });

    console.log('Successfuly created user :',userData);
}


async function listUsers(){
    return await userModel.find();
}

async function getUser(criteria){
    return await userModel.find(criteria);
}

async function deleteUser(criteria){
    if(criteria.delete_many){
        return await userModel.deleteMany(criteria);
    }

    return await userModel.deleteOne(criteria);
}
module.exports = {
    createUser : createUser,
    listUsers : listUsers,
    getUser : getUser,
    deleteUser : deleteUser,
}