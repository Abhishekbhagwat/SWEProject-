const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['message', 'order', 'other'],
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  data: {
    type: String
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
