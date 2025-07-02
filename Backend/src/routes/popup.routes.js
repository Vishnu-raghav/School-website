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


router.post("/upload", verifyJWT, singleUpload("image"), uploadPopupImage);

router.delete("/:id", verifyJWT, deletePopupImage);

router.patch("/toggle/:id", verifyJWT, togglePopupStatus);

router.get("/", getAllPopupImages);

export default router;
