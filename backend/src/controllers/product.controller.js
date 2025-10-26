import { db } from "../config/dbConnection.js";

export const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
export const createProduct = (req, res) => {
  const { name, price } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`; // lưu đường dẫn file

  const sql = "INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)";
  db.query(sql, [name, price, imageUrl], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "✅ Product created", productId: result.insertId });
  });
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM products WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Lỗi server", err });
    if (result.length === 0)
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    res.json(result[0]);
  });
};

export const getSortedProducts = async (req, res) => {
  const sortBy = req.query.sortBy || "price";
  const order = req.query.order === "desc" ? "DESC" : "ASC";

  const validFields = ["price", "brand"];
  if (!validFields.includes(sortBy)) {
    return res.status(400).json({ message: "Invalid sort field" });
  }

  const sql = `SELECT * FROM products ORDER BY ${sortBy} ${order}`;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};
