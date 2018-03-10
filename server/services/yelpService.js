require('dotenv').load();
let Yelp = require('yelp-v3');
let businesses = require('./mockData').businesses;

const yelp = new Yelp({
  access_token: process.env.YELP_API_KEY,
});

const mockSearch = (location) => {
  return new Promise(function(resolve, reject) {
    return  resolve(businesses);
  });
}

const search = (location) => {
  return yelp.search({term: 'bar', location: location, limit: 30})
    .then(function (data) {
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