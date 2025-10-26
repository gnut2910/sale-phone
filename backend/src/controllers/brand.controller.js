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
