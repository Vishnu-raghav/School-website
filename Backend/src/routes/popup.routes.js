import { Router } from "express";
import {
  uploadPopupImage,
  deletePopupImage,
  togglePopupStatus,
  getAllPopupImages,
} from "../controllers/popupImage.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { singleUpload } from "../middlewares/multer.middleware.js";

const router = Router();

// Upload pop-up image (admin only)
router.post("/upload", verifyJWT, singleUpload("image"), uploadPopupImage);

// Delete image (admin only)
router.delete("/:id", verifyJWT, deletePopupImage);

// Toggle pop-up active/inactive (admin only)
router.patch("/toggle/:id", verifyJWT, togglePopupStatus);

// Get all pop-up images (public)
router.get("/", getAllPopupImages);

export default router;
