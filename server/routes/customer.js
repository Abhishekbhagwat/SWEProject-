const router = require('express').Router();

module.exports = (transporter, Dish, Location, Notification, Message, Order, Store, User) => {

  //get user profile
  router.get('/profile', (req, res, next) => {
    res.json({
      success: true,
      user: {name: req.user.name, email: req.user.email}
    });
  });

  //update user profile
  router.post('/updateProfile', (req, res, next) => {
    let update = {};
    if (req.body.name) update.name = req.body.name;
    if (req.body.password) update.password = req.body.password;
    if (req.body.email) {
      update.verified = false;
      (new Token({user: req.user._id})).save()
      .then((token) => (
        transporter.sendMail({
          from: 'bitsplease.verify@gmail.com',
          to: req.body.email,
          subject: 'Please verify your account!',
          html:  `<p>Please click on this
                  <a href="${url}/verify/${token._id}">LINK</a>
                  to verify your account.</p>`
        })
      )).catch(() => next('invalid email'));
    }
    User.findOneAndUpdate({_id: req.user._id}, {$set: update})
    .then((user) => res.json({success: true}))
    .catch(next);
  });

  //get all orders by user
  router.get('/orders', (req, res, next) => {
    Order.find({user: req.user._id})
    .sort({timestamp: -1})
    .then((orders) => res.json({success: true, orders: orders}))
    .catch(next);
  });

  //place an order
  router.post('/addOrder', (req, res, next) => {
    Store.findOne({_id: req.body.store})
    .then((store) => {
      if (!store.open) next('store closed');
      else {
        Promise.all(req.body.dishes.map((dishId) => Dish.findOne({_id: dishId})))
        .then((dishes) => (dishes.reduce((acc, dish) => (acc + dish.price), 0)))
        .then((total) => (
          (new Order({
            user: req.user._id,
            store: req.body.store,
            dishes: req.body.dishes,
            total: total,
            timestamp: new Date()
          })).save()
        )).then((order) => (
          User.findOne({store: req.body.store})
          .then((owner) => (
            (new Notification({
              user: owner._id,
              message: 'New order pending.',
              category: 'order',
              data: order._id,
              timestamp: new Date()
            })).save()
          ))
        )).then(() => res.json({success: true}))
        .catch(next);
      }
    })
  });

  //cancel an order (only possible for pending orders)
  router.post('/cancelOrder', (req, res, next) => {
    Order.findOne({_id: req.body.order})
    .then((order) => {
      if (order.status == 'pending') {
        order.remove();
        res.json({success: true});
      } else next('order cannot be canceled');
    }).catch('next');
  })

  //get current place in queue
  router.get('/queue/:orderId', (req, res, next) => {
    Order.findOne({_id: req.params.orderId})
    .then((order) => {
      if (order.status !== 'accepted') next('not in queue');
      else {
        Store.findOne({_id: order.store})
        .then((store) => {
          store.orders.forEach((id, i) => {
            if (id.equals(req.params.orderId)) res.json({success: true, place: i});
          });
        }).catch(next);
      }
    }).catch(() => next('invalid order'));
  });

  //rate store (only possible for completed orders)
  router.post('/rate', (req, res, next) => {
    Order.findOne({_id: req.body.order})
    .then((order) => {
      if (order.status !== 'completed') next('not completed');
      else {
        Order.findOneAndUpdate({_id: order._id}, {$set: {rating: req.body.rating}})
        .then((order) => (Store.findOne({_id: order.store})))
        .then((store) => {
          let number = store.rating.number + 1;
          let score = (number * store.rating.score + req.body.rating) / number;
          return Store.findOneAndUpdate({_id: store._id}, {$set: {rating: {number, score}}});
        }).then(() => res.json({success: true}))
        .catch('invalid order');
      }
    }).catch(next);
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

  //get all notifications
  router.get('/notifications', (req, res, next) => {
    Notification.find({user: req.user._id})
    .sort({timestamp: -1})
    .then((notifications) => res.json({success: true, notifications: notifications}))
    .catch(next);
  });

  //get new notifications
  router.get('/newNotifications', (req, res, next) => {
    Notification.find({user: req.user._id, read: false})
    .sort({timestamp: -1})
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
