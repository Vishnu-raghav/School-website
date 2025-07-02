// routes/infrastructure.routes.js

import { Router } from "express";
import {
  uploadInfastructureImage,
  deleteInfastructureImage,
  getAllInfastructureImages,
} from "../controllers/infastructure.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { singleUpload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/upload", verifyJWT, singleUpload("image"), uploadInfastructureImage);

router.delete("/:id", verifyJWT, deleteInfastructureImage);

router.get("/", getAllInfastructureImages);

export default router;
