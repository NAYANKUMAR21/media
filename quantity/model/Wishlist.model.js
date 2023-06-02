const mongoose = require('mongoose');
const file = {
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  Product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
};
const WishlistSchema = new mongoose.Schema(file);
const WishlistModel = mongoose.model('Wishlist', WishlistSchema);
module.exports = WishlistModel;
