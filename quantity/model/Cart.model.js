const mongoose = require('mongoose');
const file = {
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  Product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  Quantity: { type: Number, require: true, default: 1 },
};
const CartSchema = new mongoose.Schema(file);
const CartModel = mongoose.model('Wishlist', CartSchema);
module.exports = CartModel;
