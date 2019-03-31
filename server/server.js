const app = require('express')();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const axios = require('axios');
const nodemailer = require('nodemailer');

const public = require('./routes/public');
const auth = require('./routes/auth');
const customer = require('./routes/customer');
const storeowner = require('./routes/storeowner');

const Cuisine = require('./models/cuisine')
const Dish = require('./models/dish');
const Location = require('./models/location');
const Order = require('./models/order');
const Store = require('./models/store');
const Token = require('./models/token');
const User = require('./models/user');

const url = "http://localhost:3000/api"

mongoose.connection.on('connected', () => {
  console.log('Connected to database!');
});
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bitsplease.verify@gmail.com',
    pass: process.env.GMAIL
  }
});

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    stringify: false
  }),
  resave: true,
  saveUninitialized: true
}));

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({email: username}, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);
    if (user.password !== password) return done(null, false);
    return done(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', public(Cuisine, Dish, Location, Store));
app.use('/api', auth(url, passport, transporter, Token, User));
app.use('/api', customer(transporter, Dish, Location, Order, Store, User));
app.use('/api/storeowner/', storeowner(Dish, Location, Order, Store, User));

app.use('/*', (req, res) => res.status(404).json({success: false}));
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  if (err instanceof Error) {
    console.error(err);
    res.status(500).json({success: false});
  } else res.status(400).json({success: false, msg: err});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
