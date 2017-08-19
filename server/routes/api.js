const yelpServices = require('../services/yelpService'); 

const updateRsvp = locations => {
	let places = [];
	locations.forEach( place => {
		const newPlace = place;
		newPlace.amGoing = Math.random() > 0.7 ? true : false;
		newPlace.totalGoing = Math.floor(Math.random()*20);
		places.push(newPlace);
	});

	return places;
}

module.exports = (app) => {

	app.route('/yelp/:location')
    .get((req, res) => {
    	const location = req.params.location;
      console.log('/yelp', location, req.user); 
      //yelpServices.search(location);
      const businesses = updateRsvp(yelpServices.mockSearch(location));
      // 
      res.status(200).send(businesses);
    });
};
