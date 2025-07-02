import { Router } from "express";
import { handleFormSubmission } from "../controllers/form.controller.js";
import { careerUpload } from "../middlewares/multer.middleware.js"; 

const router = Router();

router.post("/submit", careerUpload, handleFormSubmission);

export default router;
