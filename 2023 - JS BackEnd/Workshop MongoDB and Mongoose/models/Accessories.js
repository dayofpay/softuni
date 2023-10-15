const mongoose = require('mongoose');

// Schema
const AccessorySchema = new mongoose.Schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  Name: {
    type: String,
    required: true,
  },
  image_Url: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^https?:\/\/.+\..+/i.test(value);
      },
      message: 'Image URL must start with http:// or https://'
    }
  },
  Description: {
    type: String,
    required: true,
    maxlength: 255,
  },
  cubes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cubes'
  }]
});

const Accessory = mongoose.model('Accessories', AccessorySchema);

module.exports = Accessory;
