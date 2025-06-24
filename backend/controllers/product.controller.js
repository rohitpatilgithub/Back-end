import Product from "../models/product.model.js"
import mongoose from "mongoose";

export const getProducts = async (req,res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({data : products})
  } catch (error) {
    console.log("No products found",error.message);
    res.status(404).json({message : "No product found"})
  }
}

export const postProducts = async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res.status(404).json({ message: "Provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ data: newProduct });
  } catch (error) {
    console.log("Error while creating product", error.message);
    res.status(500).json({ message: "Server error" });
  }
}

export const updateProducts = async (req,res) => {
  const { id } = req.params;

  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({message : "Invalid product Id"});
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id,product,{new : true});
    res.status(200).json({data : updatedProduct});
  } catch (error) {
    res.status(500).json({message : "Server Error"})
  }
}

export const deleteProduct = async (req,res) => {
  const id = req.params.id;
  
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({message : "Product Deleted"});
  } catch (error) {
    res.status(404).json({message : "Product not found"});
  }
}