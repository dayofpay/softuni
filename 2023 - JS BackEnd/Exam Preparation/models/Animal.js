const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  years: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  kind: {
    type: String,
    required: true,
    minlength: 3,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^https?:\/\//.test(value),
      message: 'Image URL must start with http:// or https://',
    },
  },
  need: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  location: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  donations: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
