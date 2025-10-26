import { Product } from "../models/product.model.js";

export const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

import pool from "../config/db";

// Hàm lấy sản phẩm đã sắp xếp
export const getSortedProducts = async (sortBy = "price", order = "asc") => {
  const validFields = ["price", "brand"];
  const validOrders = ["asc", "desc"];

  // Kiểm tra giá trị hợp lệ của `sortBy` và `order`
  if (!validFields.includes(sortBy) || !validOrders.includes(order)) {
    throw new Error("Invalid sorting parameters");
  }

  const query = `SELECT * FROM products ORDER BY ${sortBy} ${order}`;
  const [rows] = await pool.query(query);

  return rows;
};
