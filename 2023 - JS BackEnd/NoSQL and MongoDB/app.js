const mongoose = require('mongoose');
const settings = require('./database/config');

const api = require('./database/methods');
async function main() {

    // Connecting to db
    await mongoose.connect(`mongodb://${settings.HOST}:${settings.PORT}/${settings.DATABASE_NAME}`);

    console.log('Connected successfully to',settings.DATABASE_NAME);


    // Create user

     api.createUser({
         first_name : 'test123',
         last_name : 'test123',
         email : 'test@abv.bg',
         password: '123123',
     })

    // List Users


    console.log(await api.listUsers());

    // Get user by criteria

    console.log(await api.getUser({_id : '652613e36263178a9d2a77a0'}));

    // Delete one user

    console.log(await api.deleteUser({_id : '65261492812276ab0a850ad9'}));

    // Delete more than one user

    console.log(await api.deleteUser({
        _id : ['example1','example2'],
        delete_many : true,
    }
    ));
}
main().catch(err => console.log(err));