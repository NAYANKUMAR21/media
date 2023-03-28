const mongoose = require('mongoose');
const file = {
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
};
const userSchema = new mongoose.Schema(file);
const userModel = mongoose.model('usersInfo', userSchema);
module.exports = userModel;
