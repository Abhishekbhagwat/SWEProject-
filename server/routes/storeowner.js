const router = require('express').Router();

module.exports = (Dish, Location, Order, Store, User) => {

  router.use((req, res, next) => {
    if (req.user.store) next();
    else next('not store owner');
  });

  //add a dish
  router.post('/addDish', (req, res) => {
    Promise.all(req.body.dishes.map((dishId) => Dish.findById(dishId)))
    .then((dish) => {
      (new Dish({
        name: req.body.name,
        store: req.body.store,
        price: req.body.price,
      })).save()
      .then(() => res.json({success: true}))
      .catch(next);
    }).catch(() => next('dishes addition unsuccessful'));
  });

  //update dish name
  router.post('/updateDishName/:name', (req, res) => {
    Store.findByIdAndUpdate(req.body.dish, {$push: {name: req.params.name}})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  })

  //update dish description
  router.post('/updateDishPrice/:description', (req, res) => {
    Store.findByIdAndUpdate(req.body.dish, {$push: {description: req.params.description}})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  })

  //update dish price
  router.post('/updateDishPrice/:price', (req, res) => {
    Store.findByIdAndUpdate(req.body.dish, {$push: {price: req.params.price}})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  })

//remove a dish
router.post('/removeDish', (req, res) => {
   Dish.remove({_id: req.body.dish})
   .then(() => res.json({success: true}))
   .catch(() => res.json({success: false}));
  });

  //get all orders by store
  router.get('/storeOrders', (req, res) => {
    Promise.all(req.store.orders.map((order) => Order.findById(order)))
    .then((orders) => res.json({success: true, orders: orders}))
    .catch(next);
  });

  //update order completion status
  router.post('/updateCompletionStatus', (req, res) => {
    Store.findByIdAndUpdate(req.body.orders, {$push: {status: 'Completed'}})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  });

  //update order status (accepted)
  router.post('/OrderAccept/:orderId', (req, res) => {
    Order.findByIdAndUpdate({_id: req.params.orderId}, {$set: {status: 'Accepted'}})
    .then((order) => (
      (new Notification({
        user: order.user,
        message: `Your order is received!`,
        category: 'Accept',
        data: req.user._id,
        timestamp: new Date(),
      })).save()))
    .then(() => res.json({success: true}))
    .catch(() => res.json({success: false}));
  });

  //update order status (rejected)
  router.post('/OrderAccept/:orderId', (req, res) => {
    Order.findByIdAndUpdate({_id: req.params.orderId}, {$set: {status: 'Rejected'}})
    .then((order) => (
      (new Notification({
        user: order.user,
        message: `Your order is rejected!`,
        category: 'Reject',
        data: req.user._id,
        timestamp: new Date(),
      })).save()))
    .then(() => res.json({success: true}))
    .catch(() => res.json({success: false}));
  });

  //update order status (completed)
  router.post('/OrderComplete/:orderId', (req, res) => {
    Order.findByIdAndUpdate({_id: req.params.orderId}, {$set: {status: 'Completed'}})
    .then((order) => (
      (new Notification({
        user: order.user,
        message: `Your order is ready for collection!`,
        category: 'Message',
        data: req.user._id,
        timestamp: new Date(),
      })).save()))
    .then(() => res.json({success: true}))
    .catch(() => res.json({success: false}));
  });

  return router;
}
