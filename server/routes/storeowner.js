const router = require('express').Router();

module.exports = (Dish, Location, Order, Store, User) => {

  router.use((req, res, next) => {
    if (req.user.store) next();
    else next('not store owner');
  });

  //add a store
  router.post('/addStore', (req, res, next) => {
    (new Store({
      name: req.body.name,
      cuisine: req.body.cuisine,
      location: req.body.location,
      menu: req.body.menu,
      rating: rating,
      number: number,
      cleanliness: req.body.cleanliness,
      orders: order
    })).save()
    .then(() => res.json({success: true}))
    .catch(next);
  });


  //add a dish
  router.post('/addDish', (req, res, next) => {
    (new Dish({
      name: req.body.name,
      store: req.user.store,
      description: req.body.description,
      price: req.body.price,
      img: req.body.img
    })).save()
    .then(() => res.json({success: true}))
    .catch(next);
  });

  //update dish
  router.post('/updateDish', (req, res, next) => {
    let update = {};
    if (req.body.name) update.name = req.body.name;
    if (req.body.description) update.name = req.body.description;
    if (req.body.price) update.name = req.body.price;
    if (req.body.img) update.name = req.body.img;
    Dish.findOneAndUpdate(req.body.dish, {$set: update})
    .then(() => res.json({success: true}))
    .catch(next);
  })

  //remove a dish
  router.post('/removeDish', (req, res, next) => {
    Dish.findOneAndRemove({_id: req.body.dish})
    .then(() => res.json({success: true}))
    .catch(next);
  });

  //get pending orders
  router.get('/pending', (req, res, next) => {
    Orders.find({store: req.user.store, status: 'pending'})
    .sort({timestamp: 1})
    .then((orders) => res.json({success: true, orders: orders}))
    .catch(next);
  });

  //get current order queue
  router.get('/queue', (req, res, next) => {
    Store.find({_id: req.user.store})
    .sort({timestamp: 1})
    .populate('orders')
    .then((store) => res.json({success: true, orders: store.orders}))
    .catch(next);
  });

  //accept order
  router.post('/accept', (req, res, next) => {
    Order.findOneAndUpdate({_id: req.body.order}, {$set: {status: 'accepted'}})
    .then((order) => {
      Store.findOneAndUpdate({_id: req.user.store}, {$push: {orders: order._id}})
      .then((store) => (
        (new Notification({
          user: order.user,
          message: `${store.name} has accepted your order!`,
          category: 'order',
          data: order._id,
          timestamp: new Date(),
        })).save()
      )).then(() => res.json({success: true}))
    }).catch(next);
  });

  //reject order
  router.post('/reject', (req, res, next) => {
    Order.findOneAndUpdate({_id: req.body.order}, {$set: {status: 'rejected'}})
    .then((order) => (
      (new Notification({
        user: order.user,
        message: `${store.name} has rejected your order!`,
        category: 'order',
        data: order._id,
        timestamp: new Date(),
      })).save()
    )).then(() => res.json({success: true}))
    .catch(next);
  });

  //complete order
  router.post('/complete', (req, res, next) => {
    Order.findOneAndUpdate({_id: req.body.order}, {$set: {status: 'completed'}})
    .then((order) => {
      Store.findOneAndUpdate({_id: req.user.store}, {$pull: {orders: order._id}})
      .then((store) => (
        (new Notification({
          user: order.user,
          message: `Your order from ${store.name} is ready!`,
          category: 'order',
          data: order._id,
          timestamp: new Date(),
        })).save()
      )).then(() => res.json({success: true}))
    }).catch(next);
  });

  return router;
}
