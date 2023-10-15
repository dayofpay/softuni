const Accessory = require('../models/Accessories');
const getSingleCube = require('../services/cubeServices');

exports.create = (accessoryData) => Accessory.create({
    Name : accessoryData.Name,
    image_Url : accessoryData.image_Url,
    Description : accessoryData.Description,
  }
  );

exports.getAll = () => Accessory.find();

exports.getById = async (cubeId) => {
  try {
    const accessories = await Accessory.find({ cubes: cubeId });
    return accessories;
  } catch (error) {
    console.error(error);
    return null;
  }
};
exports.getWithoutOwned = (accessoryIds) => {
  return Accessory.find({ _id: { $nin: accessoryIds } });
};
exports.attachCube = async (cubeId, accessoryId) => {
  try {
    const accessory = await Accessory.findById(accessoryId);


    if (!accessory) {
      throw new Error(`Accessory with ID ${accessoryId} not found`);
    }


    if (!accessory.cubes.includes(cubeId)) {
      accessory.cubes.push(cubeId);
    }


    await accessory.save();

    console.log(`Cube attached to accessory: ${cubeId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
exports.attachAccessory = async (cubeId, accessoryId) => {
  const cube = await getSingleCube(cubeId);
  cube.accessories.push(accessoryId);
  return cube.save();
};