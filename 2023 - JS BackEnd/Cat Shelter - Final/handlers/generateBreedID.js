function generateBreedId(breedJSON){
    const timestamp = Date.now();

    return `breed_${timestamp}`;
}


module.exports = generateBreedId;