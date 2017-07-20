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

  app.route('/login')
    .post(passport.authenticate('local-signup'),
    (req, res) => {
      //res.redirect('/');
    });
};
