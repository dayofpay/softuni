const cubeMethods = require('../database/methods');
const Cube = require('../models/Cubes');
const Accessory = require('../services/accesoryService');
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

const updateCube = async (updateData) => {
    const cube = updateData.id;

    await Cube.findByIdAndUpdate(cube,updateData).exec();
}
const listCubes = () => {

    return cubeMethods.listCubes();
}
const getSingleCube = (id) => Cube.findById(id).populate("accessories");


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
    getSingleCube : getSingleCube,
    updateCube : updateCube,
}