const router = require('express').Router();
const crypto = require('crypto');

module.exports = (passport, User) => {

  router.post('/login', (req, res, next) => {
  });

  router.post('/register', (req, res) => {
  });

  router.post('/verify', (req, res) => {
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
