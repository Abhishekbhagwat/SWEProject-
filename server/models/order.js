const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  store: {
    type: mongoose.Schema.ObjectId,
    ref: 'Store'
  },
  dishes: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Dish'
  }],
  total: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  paid: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'completed'],
    default: 'pending'
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
