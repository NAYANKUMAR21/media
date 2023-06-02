const mongoose = require('mongoose');
const file = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  gender: { type: String, req: true },
  image: [
    {
      type: String,
      required: true,
    },
  ],
  quantity: {
    type: Number,
    default: 0,
  },
  review: [
    {
      image: { type: String },
      Name: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
};
const productSchema = new mongoose.Schema(file, { versionKey: false });
const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;
