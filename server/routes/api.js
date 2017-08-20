const yelpServices = require('../services/yelpService'); 
const barServices = require('../services/barService'); 

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

	app.route('/yelp/rsvp')
    .post((req, res) => {
    	const barId = req.body.barId,
    	      userId = req.user.id;
      console.log('/rsvp', userId, barId);
     
	 		 barServices.updateGoing(barId, userId)
	 		.then(goingInfo => {
    		res.status(200).send(goingInfo);
			});      
    });

	app.route('/yelp/:location')
    .get((req, res) => {
    	const location = req.params.location;
      console.log('/yelp1', location, req.user); 
      /*
      yelpServices.search(location)
      .then ( data => {
        data =  JSON.parse(data);
        console.log('/yelp2', data);
        const businesses = updateRsvp(data.businesses);
        res.status(200).send(businesses);
      })
      */
      const businesses = updateRsvp(yelpServices.mockSearch(location));
      res.status(200).send(businesses);       
    });
};
