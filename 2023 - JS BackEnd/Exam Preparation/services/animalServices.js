const Animal = require('../models/Animal');


async function createAnimal(animalData){
    const createAnimal = new Animal(...animalData);

    console.log(createAnimal);
}



async function getAnimals(amount) {
    try {
      const animals = await Animal.find({}).limit(amount).exec();
      return animals;
    } catch (error) {
      console.error('Error fetching animals:', error);
      throw error;
    }
  }
module.exports = {
    createAnimal : createAnimal,
    getAnimals : getAnimals
}