import { db } from "../config/dbConnection.js";

export const getBrand = (req, res) => {
  const query = "SELECT brand_id,brand_name FROM brand";
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results); // [{id: 1, name: 'IPHONE'}, ...]
  });
};

// API  sort price
// Query params: sort=price_asc | price_desc
export const filterBrand = async (req, res) => {
  const { sort } = req.query; // 'price_asc' | 'price_desc' | undefined

  let sql = "SELECT * FROM product";
  if (sort === "price_asc") {
    sql += " ORDER BY price ASC";
  } else if (sort === "price_desc") {
    sql += " ORDER BY price DESC";
  }

  try {
    const [rows] = await pool.query(sql);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
