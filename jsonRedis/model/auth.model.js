const mongoose = require('mongoose');
const file = {
  name: { type: String },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
};
const userSchema = new mongoose.Schema(file);
const userModel = mongoose.model('Try_auth', userSchema);
module.exports = userModel;
