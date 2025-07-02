import { Router } from "express";
import {
  upsertContactDetail,
  getContactDetail,
} from "../controllers/contactDetail.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getContactDetail);

router.post("/update", verifyJWT, upsertContactDetail);

export default router;
