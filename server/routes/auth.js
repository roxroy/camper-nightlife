module.exports = (app, passport) => {
  app.route('/logout')
    .get((req, res) => {
      req.logout();
      res.redirect('/');
    });

  app.route('/login')
    .post(passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/');
    });
};
