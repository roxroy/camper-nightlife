module.exports = (app, passport) => {
  app.route('/logout')
    .get((req, res) => {
      req.logout();
      //res.redirect('/');
    });

  app.route('/login')
    .post(passport.authenticate('local-login'),
    (req, res) => {
      //res.redirect('/');
    });

  app.route('/signup')
    .post(passport.authenticate('local-signup'),
    (err, user, info) => {
      console.log('/signup', err);
      if (err) return next(err);
      if (!user) return next(null, false);
      next(null, user);
    });
};