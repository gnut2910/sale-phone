import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./src/routes/product.route.js";
import brandRouter from "./src/routes/brand.route.js";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["https://myshop-nine-flax.vercel.app"], // domain frontend của bạn
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/uploads", express.static("src/uploads"));
app.use("/api/products", productRouter);
app.use("/api/brands", brandRouter);

export default app;
