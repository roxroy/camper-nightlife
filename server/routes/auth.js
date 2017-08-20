module.exports = (app, passport) => {
  app.route('/logout')
    .post((req, res) => {
      req.logout();
      return res.status(200).json({success: true});
    }); 

  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (user) {
        req.login(user, function (err) {
          if ( err ){
              return res.status(200).json({success: false});
          } else {
              return res.status(200).json({success: true});
          }
        });
      } else {
          return res.status(200).json( Object.assign({success: false, info}));
      }
    })(req, res, next);
  });

  app.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (user) {
        req.login(user, function (err) {
          if ( err ){
              return res.status(200).json({success: false});
          } else {
            const newUser = { username: user.username, id: user._id };
            return res.status(200).json(Object.assign({success: true, user: newUser}));
          }
        });      
      } else {
          return res.status(200).json(Object.assign({success: false, info}));
      }
    })(req, res, next);
  });

  app.route('/isauth')
  .get((req, res) => {
    if (req.isAuthenticated()) {
      res.status(200).json({
          userid: req.user.userid,
          username : req.user.username,
      });
    } else {
      res.status(200).json({
          userid: null,
          username : null,
      });
    }
  }); 

};