const router = require('express').Router();

module.exports = (url, Dish, Location, Store) => {

  //get list of all food locations
  router.get('/locations', (req, res) => {
    Location.find()
    .then((locations) => res.json({success: true, locations: locations}))
    .catch((err) => res.json({success: false}));
  });

  //get list of all stores
  router.get('/stores', (req, res) => {
    Store.find()
    .then((stores) => res.json({success: true, stores: stores}))
    .catch((err) => res.json({success: false}));
  });

  //get stores by specific location
  router.get('/storesByLocation/:locationId', (req, res) => {
    Store.find({location: req.params.locationId})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch((err) => res.json({success: false}));
  });

  //get stores by cuisine
  router.get('/storesByCuisine/:cuisine', (req, res) => {
    Store.find({cuisine: {$elemMatch: req.params.cuisine}})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch((err) => res.json({success: false}));
  });

  //get stores by name
  //TO DO: Implement elastic search
  router.get('/storesByName/:name', (req, res) => {
    Store.find({name: req.params.name})
    .then((stores) => res.json({success: true, stores: stores}))
    .catch((err) => res.json({success: false}));
  });

  //get stores that sell specified dish
  router.get('/storesByDish/:name', (req, res) => {
    Dish.find({name: req.params.name})
    .populate('store')
    .then((dishes) => res.json({success: true, stores: dishes.map((dish) => (dish.store))}))
    .catch((err) => res.json({success: false}));
  });

  //get menu of store
  router.get('/menu/:storeId', (req, res) => {
    Dish.find({store: storeId})
    .then((dishes) => res.json({success: true, dishes: dishes}))
    .catch((err) => res.json({success: false}));
  });

  return router;
}
