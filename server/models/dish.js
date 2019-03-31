const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  store: {
    type: mongoose.Schema.ObjectId,
    ref: 'Store',
    required: true
  },
  description: {
    type: String
  },
  img: {
    data: Buffer,
    contentType: String
  },
  price: {
    type: Number,
    required: true
  }
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
