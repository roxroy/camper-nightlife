require('dotenv').load();
let Yelp = require('yelpv3');

const yelp = new Yelp({
  app_id: process.env.YELP_KEY,
  app_secret: process.env.YELP_SECRET
});

const search = (location) => {
  yelp.search({term: 'food', location: 'toronto', limit: 10})
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error(err);
    });
}

module.exports = {
  search,
}