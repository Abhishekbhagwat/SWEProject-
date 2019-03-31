const router = require('express').Router();
const crypto = require('crypto');

module.exports = (url, passport, transporter, Token, User) => {

  router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) return next(err);
      if (!user) return next('no account');
      if (!user.verified) return next('not verified');
      req.logIn(user, (err) => {
        if (err) return next('wrong password');
        return res.json({success: true});
      });
    })(req, res, next);
  });

  router.post('/register', (req, res, next) => {
    User.find({email: req.body.email})
    .then((user) => {
      if (user) next('email already used');
      else {
        (new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          orders: []
        })).save()
        .then((result) => (new Token({user: result._id})).save())
        .then((result) => {
          let mailOptions = {
            from: 'bitsplease.verify@gmail.com',
            to: req.body.email,
            subject: 'Please verify your account!',
            html:  `<p>Please click on this
                    <a href="${url}/verify/${result._id}">LINK</a>
                    to verify your account.</p>`
          }
          transporter.sendMail(mailOptions)
          .then(() => res.json({success: true}))
          .catch((err) => next('invalid email'))
        })
      }
    }).catch(next);
  });

  router.get('/verify/:id', (req, res, next) => {
    Token.findOneAndDelete({_id: req.params.id})
    .then((t) => User.findOneAndUpdate({_id: t.user}, {$set: {verified: true}}))
    .then(() => res.json({success: true}))
    .catch((err) => next('invalid verification link'));
  });

  router.use((req, res, next) => {
    if (req.user) next();
    else next('not logged in');
  });

  router.post('/logout', (req, res) => {
    req.logout();
    res.json({success: true});
  });

  return router;
};
