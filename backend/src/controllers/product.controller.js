import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  try {
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in fetching products", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in creating Product", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(id, product, {
    new: true,
  });
  try {
    await updatedProduct.save();
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("Error in updating product", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await Product.findByIdAndDelete(id);

  try {
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    console.log("Error in deleting product", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
