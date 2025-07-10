import { Router } from "express";
import {
  loginAdmin,
  logoutAdmin,
  refreshAccessToken,
  updateAdminCredentials,
  getCurrentAdmin,
} from "../controllers/admin.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();


router.post("/login", loginAdmin);
router.post("/logout", verifyJWT, logoutAdmin);
router.post("/refresh-token", refreshAccessToken);

router.post("/change-credentials", verifyJWT, updateAdminCredentials);

router.get("/current-admin", verifyJWT, getCurrentAdmin);

export default router;
