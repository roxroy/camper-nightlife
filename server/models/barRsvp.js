const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarRsvp = new Schema({
  barId: String,
  rsvpIds: [],
});

module.exports = mongoose.model('BarRsvp', BarRsvp);
