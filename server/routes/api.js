const yelpServices = require('../services/yelpService'); 
const barServices = require('../services/barService'); 

module.exports = (app) => {

	app.route('/yelp/rsvp')
    .post((req, res) => {
    	const barId = req.body.barId,
            userId = req.user && req.user.id || null;
      
      if (userId) {
  		  barServices.updateGoing(barId, userId)
  	 		.then(goingInfo => {
      		res.status(200).send(goingInfo);
  			});
      } else {
          res.status(200).send({ error: true });
      }
    });

	app.route('/yelp/:location')
    .get((req, res) => {
    	const location = req.params.location;
            userId = req.user && req.user.id || "111111111111111111111111";
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
