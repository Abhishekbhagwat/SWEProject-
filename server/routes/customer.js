const router = require('express').Router();

module.exports = (Dish, Location, Order, Store, User) => {

  //update user name
  router.post('/updateProfile', (req, res, next) => {
    User.update(req.user, {$set: {name: req.body.name}})
    .then(() => res.json({success: true}))
    .catch(next)
  });

  //update email
  router.post('/updateEmail', (req, res, next) => {
    User.update(req.user, {$set: {email: req.body.email}})
    .then(() => res.json({success: true}))
    .catch(next)
  });

  //get all orders by user
  router.get('/orders', (req, res, next) => {
    Promise.all(req.user.orders.map((order) => Order.findById(order)))
    .sort({timestamp: -1})
    .then((orders) => res.json({success: true, orders: orders}))
    .catch(next);
  });

  //place an order
  router.post('/addOrder', (req, res, next) => {
    Promise.all(req.body.dishes.map((dishId) => Dish.findById(dishId)))
    .then((dishes) => (dishes.reduce((acc, dish) => (acc + dish.price), 0)))
    .then((total) => (
      (new Order({
        user: req.user._id,
        store: req.body.store,
        dishes: req.body.dishes,
        total: total,
        timestamp: new Date()
      })).save()
    )).then((order) => {
      User.find({store: req.body.store})
      .then((owner) => (
        (new Notification({
          user: owner._id,
          message: 'New order pending.',
          category: 'order',
          data: order._id,
          timestamp: new Date()
        })).save()
      ))
    }).catch(next)
  });

  //cancel an order (only possible for pending orders)
  router.post('/cancelOrder', (req, res, next) => {
    Order.find({_id: req.body._id})
    .then((order) => {
      if (order.status == 'pending') {
        order.remove();
        res.json({success: true});
      } else res.json({success: false, msg:"order cannot be canceled"});
    }).catch('next');
  })

  //give rating to the store (only possible after an order is completed)
  router.post('/rating', (req, res, next) => {
    Order.find({_id: req.body._id})
    .then((order) => {
      if (order.status == 'completed') {
        Order.update(order, {$set: {rating: req.body.rating}});
        Store.findOneAndUpdate({_id: order.store}, {
          $set: {
            rating: {
              score: (order.store.rating.number * order.store.rating.score + order.rating) / (order.store.rating.number + 1), 
              number: order.store.rating.number + 1 
            }
          }
        });
      } else next('You cannot rate the store as your order is not completed.');
    })
    .then(() => res.json({success: true}))
    .catch(next);
  });

  //get messages
  router.get('/messages', (req, res, next) => {
    Message.find({$or: [{to: req.user._id}, {from: req.user._id}]})
    .populate({path: 'from to', select: 'name'})
    .sort({timestamp: -1})
    .then((messages) => res.json({success: true, messages: messages}))
    .catch(next);
  });

  //send message
  router.post('/message', (req, res, next) => {
    (new Message({
      from: req.user._id,
      to: req.body.to,
      content: req.body.content,
      timestamp: new Date()
    })).save()
    .then(() => (
      (new Notification({
        user: req.body.to,
        message: `You have a new message from ${req.user.name}.`,
        category: 'message',
        data: req.user._id,
        timestamp: new Date()
      })).save()))
    .then(() => res.json({success: true}))
    .catch(next);
  });

  //get notifications
  router.get('/notifications', (req, res, next) => {
    Notification.find({user: req.user._id})
    .then((notifications) => res.json({success: true, notifications: notifications}))
    .catch(next);
  });

  //read notification
  router.post('/readNotification', (req, res, next) => {
    Notification.findOneAndUpdate({_id: req.body.notification}, {$set: {read: true}})
    .then(() => res.json({success: true}))
    .catch(next);
  });



  return router;
}
