const mongoose = require('mongoose');

const cuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String
  }
});

const Cuisine = mongoose.model('Cuisine', cuisineSchema);

module.exports = Cuisine;
