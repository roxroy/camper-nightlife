const yelpServices = require('../services/yelpService'); 
const barServices = require('../services/barService'); 

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
            userId = req.user && req.user.id || "1111111111111111111111111";
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
      yelpServices.mockSearch(location).then( data => {
        return data;
      }).then( data => {
        return barServices.updateStats(data, userId);
      }).then( data => {
        res.status(200).send(data);
      }).catch( err  => {
        console.log('/yelp/:location error', err);
      });
    });
};
