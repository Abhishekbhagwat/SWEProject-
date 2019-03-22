const router = require('express').Router();

module.exports = (url, Dish, Location, Order, Store, User) => {
  //get all orders by user
  router.get('/orders', (req, res) => {
    Promise.all(req.user.orders.map((order) => Order.findById(order)))
    .then((orders) => res.json({success: true, orders: orders}))
    .catch((err) => res.json({succcess: false}));
  });

  //get specific store information
  router.get('/store/:id', (req, res) => {
    Store.findById(req.params.id)
    .then((store) => res.json({success: true, store: store}))
    .catch((err) => res.json({success: false}))
  });

  //add an order
  router.post('/addorder', (req, res) => {
    Promise.all(req.body.dishes.map((dishId) => Dish.findById(dishId)))
    .then((dishes) => {
      let total = 0;
      dishes.forEach((dish) => (total += dish.price));
      return total;
    }).then((total) => {
      (new Order({
        user: req.user._id,
        store: req.body.store,
        dishes: req.body.dishes,
        total: total
      })).save()
      .then(() => res.json({success: true}))
      .catch(() => res.json({success: false}));
    }).catch(() => res.json({success: false, msg: 'dishes not found'}));
  });

  //storeowner to add a dish
  router.post('/adddish',(req,res)=>{
    //TO DO
  })

  return router;
}
