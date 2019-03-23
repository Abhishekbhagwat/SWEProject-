const router = require('express').Router();

module.exports = (Dish, Location, Order, Store, User) => {

  router.use((req, res, next) => {
    if (req.user.store) next();
    else next('not store owner');
  });



  return router;
}
