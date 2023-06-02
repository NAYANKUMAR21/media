const ProductModel = require("../model/Product.model");

const ProductAdd = async (req, res) => {
  const { name, description, price, category, brand, gender, image, quantity } =
    req.body;

  try {
    await ProductModel.create({
      name,
      description,
      price,
      category,
      brand,
      gender,
      image,
      quantity,
      image: [],
      review: [],
    });
    return res.status(200).send({ message: 'Product Added Successfully' });
  } catch (er) {
    return res.status(200).send({ message: er.message });
  }
};
module.exports = ProductAdd;
