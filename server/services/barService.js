const mongoose = require('mongoose');
let BarRsvp = require('../models/barRsvp');

const updateRsvp = (locations, stats) => {
  console.log('updateRsvp', stats);
  let places = [];

  locations.forEach( place => {
    let stat = stats.find( item => place.id === item.barId );
    const newPlace = { 
      id : place.id,
      name : place.name,
      image_url : place.image_url,
      url : place.url,
      review_count : place.review_count,
      rating : place.rating,
      location : {
        address1 : place.location.address1,
        address2 : place.location.address2,
      },
    };
    newPlace.amGoing = stat && stat.amGoing || false;
    newPlace.totalGoing = stat && stat.totalGoing || 0;
    places.push(newPlace);
  });

  return places;
}

const updateStats = (bars, userId) => {
  const userObjectId = mongoose.Types.ObjectId(userId);
  return BarRsvp.aggregate([
    {
        "$project": {
          "barId" : "$barId",
          "totalGoing": "$totalRsvp",
          "amGoing" : {
            "$setIsSubset": [ [userObjectId], "$rsvpIds" ]
          }
        }
      }
    ]).exec()
      .then(stats => {
        return updateRsvp(bars, stats);
    }).catch( err  => {
      console.log('updateStats error', err);
    });
  
}

const updateGoing = (bars, userId) => {
  return BarRsvp.findOne({ 'barId': barId }).exec()
    .then(_barRsvp => {
      if (_barRsvp) {
        const foundIndex = _barRsvp.rsvpIds.findIndex(item => {
          return item.toString() === userId; 
        });
        let amGoing;
        if (foundIndex == -1) {
            _barRsvp.rsvpIds.push(userId);
            amGoing = true;
        } else {
          _barRsvp.rsvpIds.splice(foundIndex, 1);
            amGoing = false;
        }
        _barRsvp.totalRsvp = _barRsvp.rsvpIds.length;
         _barRsvp.save((err) => {
          if (err) {
            throw err;
          }
        });
        console.log('updateGoing 1', _barRsvp);
        return { totalGoing: _barRsvp.totalRsvp, amGoing} ;
      } else {
        const newBarRsvp = new BarRsvp();
        newBarRsvp.barId = barId;
        newBarRsvp.rsvpIds.push(userId);
        newBarRsvp.totalRsvp = 1;
        newBarRsvp.save((err) => {
          if (err) {
            throw err;
          }
        });
        return { totalGoing: 1, amGoing: true} ;
      }
    });
};

module.exports = {
  updateGoing,
  updateStats,
}