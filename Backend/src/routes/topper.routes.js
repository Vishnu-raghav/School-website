// routes/topper.routes.js

import { Router } from "express";
import {
  uploadTopper,
  deleteTopper,
  getAllToppers,
} from "../controllers/topper.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { singleUpload } from "../middlewares/multer.middleware.js";

const router = Router();

// 📥 Upload topper image (admin only)
router.post("/upload", verifyJWT, singleUpload("image"), uploadTopper);

// ❌ Delete topper image by ID (admin only)
router.delete("/:id", verifyJWT, deleteTopper);

// 📤 Get all topper images (public)
router.get("/", getAllToppers);

export default router;
