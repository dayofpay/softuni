const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 10;
      },
      message: 'Name should be at least 10 characters.',
    },
  },
  type: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 2;
      },
      message: 'Type should be at least 2 characters.',
    },
  },
  damages: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 10;
      },
      message: 'Damages should be at least 10 characters.',
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^https?:\/\/.*/.test(value);
      },
      message: 'Image URL should start with http:// or https://.',
    },
  },
  description: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 10 && value.length <= 200;
      },
      message: 'Description should be between 10 and 200 characters.',
    },
  },
  production: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 1900 && value <= 2023;
      },
      message: 'Production year should be between 1900 and 2023.',
    },
  },
  exploitation: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: 'Exploitation should be a positive number.',
    },
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: 'Price should be a positive number.',
    },
  },
  buyingList: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required : true,
  },

});

const Electronics = mongoose.model('Electronics', electronicsSchema);

module.exports = Electronics;