const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,                 // username has to be unique
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,               // timestamp is automatically created
});

const User = mongoose.model('User', userSchema);          // create a table, User

module.exports = User;
