function generateUniqueCatId(catJSON) {
    const timestamp = Date.now();
    return `cat_${timestamp}`;
}




module.exports = generateUniqueCatId;