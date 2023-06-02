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
    maxlength: 10,
    service: function () {
      return this.email.includes('@gmail.com');
    },
  },
  UserProfilePic: {
    type: String,
    default: 'default.jpg',
  },
  Cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      Quantity: {
        type: Number,
        require: [true, 'Enter quantity for the cart Products'],
      },
    },
  ],
  Wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
};
const UserSchema = new mongoose.Schema(file);
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
