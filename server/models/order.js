const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  storeowner: {
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
    required: true,
  },
  paid: {
    type: Boolean,
    default: false
  },
  completed: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['Reject', 'Accept', 'Completed']
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
