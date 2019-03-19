const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  orders: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Order'
  }],
  verified: {
    type: Boolean,
    default: false,
  },
  store: {
    type: mongoose.Schema.ObjectId,
    ref: 'Store'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
