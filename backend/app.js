import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./src/routes/product.route.js";
import brandRouter from "./src/routes/brand.route.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("src/uploads"));
app.use("/api/products", productRouter);
app.use("/api/brands", brandRouter);

app.get("/test-db", (req, res) => {
  connection.query("SELECT 1 + 1 AS result", (err, rows) => {
    if (err) return res.status(500).json({ message: "DB Error", err });
    res.json({ message: "Connected!", result: rows });
  });
});

export default app;
