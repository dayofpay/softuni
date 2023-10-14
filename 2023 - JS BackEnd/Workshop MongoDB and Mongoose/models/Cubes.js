const mongoose = require('mongoose');

// Schema
const cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 255
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
  diff_level: {
    type: Number,
    required: true,
    min: 1,
    max: 6
  },
  accessories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accessories'
  }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
