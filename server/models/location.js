const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  location: {
    type: String
  },
  img: {
    data: Buffer,
    contentType: String
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
