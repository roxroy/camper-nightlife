const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const userServices = require('../services/userservice'); 

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy( 
  {
     passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  (username, password, done) => {
    process.nextTick(() => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) { 
          return done(null, false,  { success: false, message: 'That username is already taken.'}); 
        } else {
  
         userServices.addNew({username, password}, (newUser) => {
            return done(null, newUser);
          });  
        }
      });
    });
  }));
};
