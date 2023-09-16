function generateUniqueCatId(catJSON) {
    const timestamp = Date.now();
    return `cat_${timestamp}`;
}


function generateBreedId(breedJSON){
    const timestamp = Date.now();

    return `breed_${timestamp}`;
}


module.exports = {generateBreedId,generateUniqueCatId};