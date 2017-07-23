const yelpServices = require('../services/yelpService'); 

module.exports = (app) => {

	app.route('/yelp/:location')
    .get((req, res) => {
    	const location = req.params.location;
      console.log('/yelp', location); 
      //yelpServices.search(location);
      const businesses = yelpServices.mockSearch(location);
      res.status(200).send(businesses);
    });
};
