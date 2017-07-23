const yelpServices = require('../services/yelpService'); 

module.exports = (app) => {

app.route('/yelp')
    .get((req, res) => {
      //yelpServices.search();
      console.log('/yelp');
      const businesses = yelpServices.mockSearch();
       res.status(200).send(businesses);

    });
};
