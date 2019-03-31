const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  coordinates: {
    lat: Number,
    long: Number
  },
  img: {
    type: String
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
