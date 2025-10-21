import { Product } from "../models/product.model.js";

export const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};
