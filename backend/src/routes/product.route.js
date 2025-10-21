import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
} from "../controllers/product.controller.js";
import multer from "multer";

const router = express.Router();

// cấu hình multer để lưu ảnh vào /uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), createProduct);
router.get("/", getProducts);

router.get("/:id", getProductById);

export default router;
