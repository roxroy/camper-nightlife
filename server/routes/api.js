const yelpServices = require('../services/yelpService'); 

module.exports = (app) => {

app.route('/yelp')
    .get((req, res) => {
      yelpServices.search();
    });
};
