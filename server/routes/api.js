const yelpServices = require('../services/yelpService'); 
const barServices = require('../services/barService'); 

const DEFAULT_USERID = "111111111111111111111111";

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

  app.route('/yelp/allrsvp')
    .get((req, res) => {
      const userId = req.user && req.user.id || DEFAULT_USERID;
      console.log('/yelp/allrsvp', userId );
      if (userId) {
        barServices.getStats(userId)
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
            userId = req.user && req.user.id || DEFAULT_USERID;
      
      if (true) {
        yelpServices.search(location).then ( data => {
          return JSON.parse(data);
        }).then( data => {
          return barServices.updateStats(data.businesses, userId);
        }).then( data => {
          res.status(200).send(data);
        }).catch( err  => {
          console.log('/yelp/:location error', err);
        });
      } else {
        yelpServices.mockSearch(location).then( data => {
          return data;
        }).then( data => {
          return barServices.updateStats(data, userId);
        }).then( data => {
          res.status(200).send(data);
        }).catch( err  => {
          console.log('/yelp/:location error', err);
        });
      }
    });
};
