const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarRsvp = new Schema({
  barId: String,
  rsvpIds: [ Schema.Types.ObjectId ],
  totalRsvp: Number,
});

module.exports = mongoose.model('BarRsvp', BarRsvp);
