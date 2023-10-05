const fs = require('fs');

const database = fs.readFileSync('./database/storage.json',{encoding:'utf-8'});
const createCube = (cubeData) => {

}


const listCubes = () => {

    return JSON.parse(database)
}


module.exports = {
    createCube : createCube,
    listCubes : listCubes,
}