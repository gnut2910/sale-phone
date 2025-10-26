import { getBrand } from "../controllers/brand.controller.js";
import express from "express";
const router = express.Router();
router.get("/", getBrand);

export default router;
