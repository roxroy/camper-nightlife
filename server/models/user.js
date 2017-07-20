const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt   = require('bcrypt-nodejs');

const User = new Schema({
  username: String,
  password: String,
});

// generating a hash
User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User);
