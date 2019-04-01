const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: [{
    type: String,
    enum: ['American', 'Chinese', 'Indian', 'Indonesian', 'Italian', 'Japanese',
          'Korean', 'Malay', 'Middle Eastern', 'Singaporean', 'Thai',
          'Vietnamese', 'Western', 'Other']
  }],
  location: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true,
  },
  menu: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Dish'
  }],
  rating: {
    score: {
      type: Number,
      default: 0
    },
    number: {
      type: Number,
      default: 0
    }
  },
  cleanliness: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    default: false
  },
  orders: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Order'
  }],
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
