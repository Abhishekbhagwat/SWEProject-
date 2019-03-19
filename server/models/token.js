const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
