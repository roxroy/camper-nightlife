const mongoose = require('mongoose');
let BarRsvp = require('../models/barRsvp');

const updateGoing = (barId, userId) => {
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
}