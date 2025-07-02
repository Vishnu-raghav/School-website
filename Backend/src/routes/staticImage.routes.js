// routes/staticImage.routes.js
import { Router } from "express";
import {
  uploadStaticImage,
  deleteStaticImage,
  getAllStaticImages,
  getStaticImagesBySection,
} from "../controllers/staticImage.controller.js";
import { singleUpload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Upload static image
router.post("/upload", verifyJWT, singleUpload("image"), uploadStaticImage);

// Delete static image
router.delete("/:id", verifyJWT, deleteStaticImage);

// Get all static images
router.get("/", getAllStaticImages);

// Get static images by section
router.get("/section", getStaticImagesBySection);

export default router;
