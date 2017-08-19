require('dotenv').load();
let Yelp = require('yelpv3');
let businesses = require('./mockData').businesses;

const yelp = new Yelp({
  app_id: process.env.YELP_KEY,
  app_secret: process.env.YELP_SECRET
});

const mockSearch = (location) => {
  console.log('mockSearch', location, businesses.length);
  return businesses;
}

const search = (location) => {
  yelp.search({term: 'bar', location: location, limit: 10})
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error(err);
    });
}

module.exports = {
  search,
  mockSearch,
}