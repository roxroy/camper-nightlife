const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth'),
	apiRoutes = require('./routes/api');

const app = express();
require('dotenv').load();
require('./auth/passport')(passport);

const dbUri = process.env.MONGO_URI || 'mongodb://localhost/nightlife';
mongoose.Promise = Promise;
mongoose.connect(dbUri, {
  useMongoClient: true,
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.use(cookieParser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(session({
  secret: 'secretSauce2017',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated();
  next();
});

authRoutes(app, passport);
apiRoutes(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'),  { user: req.user });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
