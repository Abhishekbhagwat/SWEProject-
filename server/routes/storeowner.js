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
    Store.findByIdAndUpdate(req.body.orders, {$push: {status: true}})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  })

  return router;
}
