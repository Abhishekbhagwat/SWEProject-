const router = require('express').Router();

module.exports = (Dish, Location, Order, Store, Chat, User) => {

  //get all orders by user
  router.get('/orders', (req, res) => {
    Promise.all(req.user.orders.map((order) => Order.findById(order)))
    .then((orders) => res.json({success: true, orders: orders}))
    .catch(next);
  });

  //place an order
  router.post('/addorder', (req, res) => {
    Promise.all(req.body.dishes.map((dishId) => Dish.findById(dishId)))
    .then((dishes) => (dishes.reduce((acc, dish) => (acc + dish.price), 0)))
    .then((total) => {
      (new Order({
        user: req.user._id,
        storeowner: req.body.storeowner,
        store: req.body.store,
        dishes: req.body.dishes,
        total: total
      })).save()
      .then(() => res.json({success: true}))
      .then(() => (
        (new Notification({
          user: req.body.storeowner,
          message: `You have a new message from ${req.user.name}!`,
          category: 'New Order',
          data: req.user._id,
          timestamp: new Date(),
        })).save()));
    }).catch(() => next('dishes not found'));
  });

  //get messages
  router.get('/messages', (req, res) => {
    Message.find({$or: [{to: req.user._id}, {from: req.user._id}]})
    .populate({path: 'from to', select: 'name'})
    .sort({timestamp: -1})
    .then((messages) => res.json({success: true, messages: messages}))
    .catch(() => res.json({success: false}));
  });
  
  //send message
  router.post('/message', (req, res) => {
    (new Message({
      from: req.user._id,
      to: req.body.to,
      content: req.body.content,
      timestamp: new Date(),
    })).save()
    .then(() => (
      (new Notification({
        user: req.body.to,
        message: `You have a new message from ${req.user.name}!`,
        category: 'Message',
        data: req.user._id,
        timestamp: new Date(),
      })).save()))
    .then(() => res.json({success: true}))
    .catch((err) => res.json({success: false, err}));
  });

  //get notifications
  router.get('/notifications', (req, res) => {
    Notification.find({user: req.user._id})
    .then((notifications) => res.json({success: true, notifications: notifications}))
    .catch(() => res.json({success: false}));
  });

  //read notification and update
  router.post('/readNotification', (req, res) => {
    Notification.findByIdAndUpdate(req.body.notification, {$set: {read: true}})
    .then(() => res.json({success: true}))
    .catch(() => res.json({success: false}));
  });

  return router;
}
