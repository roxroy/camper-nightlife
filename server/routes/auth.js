module.exports = (app, passport) => {
  app.route('/logout')
    .get((req, res) => {
      req.logout();
      res.redirect('/');
    }); 

  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
          return next(err);
      }
      if (user) {
          return res.status(200).json({success: true});
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
          return res.status(200).json({success: true});
      } else {
          return res.status(200).json( Object.assign({success: false, info}));
      }
    })(req, res, next);
  });

};