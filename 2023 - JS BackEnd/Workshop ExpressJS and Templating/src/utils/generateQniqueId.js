const generateUniqueId = require('generate-unique-id');


const generateId = (settings) => {
    return generateUniqueId({settings});
}

module.exports = {
    generateId : generateId
};