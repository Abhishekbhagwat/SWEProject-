const router = require('express').Router();

module.exports = (Cuisine, Dish, Location, Store) => {

  //get list of all cuisines
  router.get('/cuisines', (req, res, next) => {
    Cuisine.find()
    .then((cuisines) => res.json({success: true, cuisines: cuisines}))
    .catch(next);
  });

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
  router.get('/store/:storeId', (req, res) => {
    Store.findOne({_id: req.params.storeId})
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
  router.get('/storesByLocation/:location', (req, res, next) => {
    Store.find({location: req.params.location})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch(next);
  });

  //get stores offering specified cuisine
  router.get('/storesByCuisine/:cuisine', (req, res, next) => {
    Store.find({cuisine: req.params.cuisine})
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
