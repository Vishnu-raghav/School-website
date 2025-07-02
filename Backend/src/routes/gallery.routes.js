import { Router } from "express";
import {
  uploadGalleryImage,
  deleteGalleryImage,
  getAllGalleryImages,
  getGalleryImagesBySection,
} from "../controllers/galleryImage.controller.js";
import { singleUpload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();


router.post("/upload", verifyJWT, singleUpload("image"), uploadGalleryImage);

router.delete("/delete/:id", verifyJWT, deleteGalleryImage);

router.get("/all", getAllGalleryImages);

router.get("/section", getGalleryImagesBySection);

export default router;
