const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cuisine: [{
    type: String,
    required: true,
  }],
  location:{
    type: mongoose.Schema.ObjectId,
    ref: 'Location',
    required: true,
  },
  menu:[{
    type: mongoose.Schema.ObjectId,
    ref: 'Dish'
  }],
  rating: {
    score: {
      type: Number
    },
    number: {
      type: Number
    }
  },
  cleanliness: {
    type: String,
    required: true
  },
  orders: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Order'
  }],
});

const Store = mongoose.model('foodStore', storeSchema);

module.exports = Store;
