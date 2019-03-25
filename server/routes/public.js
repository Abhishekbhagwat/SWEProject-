const router = require('express').Router();

module.exports = (Dish, Location, Store) => {

  //get list of all food locations
  router.get('/locations', (req, res, next) => {
    Location.find()
    .then((locations) => res.json({success: true, locations: locations}))
    .catch(next);
  });

  //get list of all stores
  router.get('/stores', (req, res, next) => {
    Store.find()
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  });

  //get store by ID
  router.get('/store/:id', (req, res) => {
    Store.find({_id: req.params.id}, {orders: 0})
    .then((store) => res.json({success: true, store: store}))
    .catch(next)
  });

  //get stores by store name
  router.get('/storesByName/:name', (req, res, next) => {
    Store.find({name: req.params.name})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  });

  //get stores at specified location
  router.get('/storesByLocation/:locationId', (req, res, next) => {
    Store.find({location: req.params.locationId})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  });

  //get stores offering specified cuisine
  router.get('/storesByCuisine/:cuisine', (req, res, next) => {
    Store.find({cuisine: {$elemMatch: req.params.cuisine}})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  });

  //get stores selling specified dish
  router.get('/storesByDish/:dish', (req, res, next) => {
    Dish.find({name: req.params.dish})
    .populate('store')
    .then((dishes) => res.json({success: true, stores: dishes.map((dish) => (dish.store))}))
    .catch(next);
  });

  //get store menu
  router.get('/menu/:storeId', (req, res, next) => {
    Dish.find({store: req.params.storeId})
    .then((dishes) => res.json({success: true, dishes: dishes}))
    .catch(next);
  });

  return router;
}
