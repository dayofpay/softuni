const animalServices = require("../services/animalServices");

const router = require("express").Router();



router.get('/', async (req, res) => {
    try {

      const animals = await animalServices.getAnimals(6);
      const hasAnimals = animals.length >= 1;
      const mapped = JSON.stringify(animals)
      console.log(animals);
      res.render('index', { hasAnimals, animals : JSON.parse(mapped) });
    } catch (error) {
      console.error('Error fetching animals:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

module.exports = router;