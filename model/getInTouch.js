const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getInTouchSchema = new Schema({
  name: String,
  email: String,
  message: String,
  phone: String
}, {
  timestamps: true
  
});

const GetInTouch = mongoose.model('GetInTouch', getInTouchSchema);

module.exports = GetInTouch;