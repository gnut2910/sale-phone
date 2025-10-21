import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./src/routes/product.route.js";
import brandRouter from "./src/routes/brand.route.js";
import { filterBrand } from "./src/controllers/brand.controller.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("src/uploads"));
app.use("/api/products", productRouter);
app.use("/api/brands", brandRouter);
app.use("/api/products", filterBrand);

export default app;
