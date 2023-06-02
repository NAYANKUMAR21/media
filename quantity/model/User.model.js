const mongoose = require('mongoose');
const file = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Enter email id'],
    unique: [true, 'User with this Email already Exists'],
  },
  password: {
    type: String,
    required: [true, 'Enter password'],
  },
  UserProfilePic: {
    type: String,
    default: 'default.jpg',
  },
  Country: { type: String, require: [true, 'Please enter Country '] },
  State: { type: String, require: true },
  Address: { type: String, require: [true, 'Please Enter Address'] },
  Role: {
    type: String,
    enum: ['Admin', 'employee', 'User', ''],
    default: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
};
const UserSchema = new mongoose.Schema(file, { versionKey: false });
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
