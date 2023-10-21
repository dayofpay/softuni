const cubeModel = require('../models/Cubes');
const About = require('../models/Site');
const aboutModel = require('../models/Site');
async function createCube(cubeData) {
    await cubeModel.create({
        name: cubeData.name,
        description: cubeData.description,
        image_Url: cubeData.image_Url,
        diff_level: cubeData.diff_level,
        creatorId: cubeData.creatorId
    });
    console.log('Successfully created cube:', cubeData);
}

async function listCubes() {
    return await cubeModel.find();
}



async function listCubes(){
    return await cubeModel.find();
}

async function getCube(criteria){
    return await cubeModel.find(criteria);
}

async function getCubeById(id){
    return await cubeModel.findOne({_id:id});
}

async function deleteCube(criteria){
    if(criteria.delete_many){
        return await cubeModel.deleteMany(criteria);
    }

    return await cubeModel.deleteOne(criteria);
}


async function setAbout(aboutMessage) {
    try {
        if((await aboutModel.find()).length < 1){
            console.log('Creating About Page ...');
            const about = new About(aboutMessage);
            await about.save();
        }
    } catch (error) {
        console.error('Error creating the about page:', error);
    }
}

async function getAbout(){
    return await aboutModel.findOne();
}
module.exports = {
    createCube : createCube,
    listCubes : listCubes,
    getCube : getCube,
    deleteCube : deleteCube,
    getCubeById : getCubeById,
    setAbout : setAbout,
    getAbout : getAbout,
}