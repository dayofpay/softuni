const cubeMethods = require('../database/methods');
const Cube = require('../models/Cubes');
const createCube = (cubeData) => {

    // cubeMethods.createCube({
    //     'name' : cubeData.name,
    //     'description' : cubeData.description,
    //     'image_Url' : cubeData.image_Url,
    //     'diff_level' : cubeData.diff_level,
    // })

    cubeMethods.createCube({
        ...cubeData,
    })
}


const listCubes = () => {

    return cubeMethods.listCubes();
}

const getCubeData = async (cubeId) => {

    const cube = await cubeMethods.getCubeById(cubeId)


    if (cube) {
        return {
            name : cube.name,
            image_Url : cube.image_Url,
            description: cube.description,
            diff_level : cube.diff_level
        }
    } else {
        return 'Invalid Cube';
    }
};


module.exports = {
    createCube : createCube,
    listCubes : listCubes,
    getCubeData : getCubeData,
}