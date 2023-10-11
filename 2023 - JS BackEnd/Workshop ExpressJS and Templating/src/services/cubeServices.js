const fs = require('fs');

const database = fs.readFileSync('./database/storage.json',{encoding:'utf-8'});
const createCube = (cubeData) => {
    const cubeDataDB = fs.readFileSync('./database/storage.json');
    let cubeJson = JSON.parse(cubeDataDB);
    cubeJson.push(cubeData);
    console.log(true);
    fs.writeFileSync('./database/storage.json', JSON.stringify(cubeJson));
}


const listCubes = () => {

    return JSON.parse(database)
}

const getCubeData = (cubeId) => {
    const cubeData = JSON.parse(database);


    const cube = cubeData.find((cube) => cube.id === cubeId);

    if (cube) {
        return {
            id: cube.id,
            name: cube.name,
            description: cube.description,
            image_url: cube.image_url,
            diff_level: cube.diff_level,
        };
    } else {
        return 'Invalid Cube';
    }
};


module.exports = {
    createCube : createCube,
    listCubes : listCubes,
    getCubeData : getCubeData,
}