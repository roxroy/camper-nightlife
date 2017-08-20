require('dotenv').load();
let Yelp = require('yelpv3');
let businesses = require('./mockData').businesses;

const yelp = new Yelp({
  app_id: process.env.YELP_KEY,
  app_secret: process.env.YELP_SECRET
});

const mockSearch = (location) => {
  return new Promise(function(resolve, reject) {
    return  resolve(businesses);
  });
}

const search = (location) => {
  return yelp.search({term: 'bar', location: location, limit: 15})
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function (err) {
      console.error(err);
    });
}

module.exports = {
  search,
  mockSearch,
}