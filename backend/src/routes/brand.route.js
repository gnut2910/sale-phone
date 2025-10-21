import { getBrand, filterBrand } from "../controllers/brand.controller.js";
import express from "express";
const router = express.Router();
router.get("/", getBrand);
router.get("/", filterBrand);

export default router;
