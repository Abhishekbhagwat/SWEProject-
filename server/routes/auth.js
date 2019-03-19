const router = require('express').Router();
const crypto = require('crypto');

module.exports = (passport, User) => {

  router.post('/login', (req, res, next) => {
  });

  router.post('/register', (req, res) => {
    (new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      orders: []
    })).save()
    .then(() => {
      //SEND VERIFICATION LINK
      res.json({success: true})
    }).catch(() => res.json({success: false}));
  });

  router.get('/verify:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set: {verified: true}})
    .then(() => res.json({success: true}))
    .catch(() => res.json({success: false}));
  });

  router.use((req, res, next) => {
    if (req.user) next();
    else res.json({success: false});
  });

  router.post('/logout', (req, res) => {
    req.logout();
    res.json({success: true});
  });

  return router;
};
