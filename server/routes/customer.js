const router = require('express').Router();

module.exports = (Dish, Location, Order, Store, User) => {

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
        store: req.body.store,
        dishes: req.body.dishes,
        total: total
      })).save()
      .then(() => res.json({success: true}))
      .catch(next);
    }).catch(() => next('dishes not found'));
  });

  return router;
}
