import { Router } from "express";
import {
  register,
  verifyEmail,
  login,
  logout,
  resendVerification,
  forgetPassword,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/verify", verifyEmail);
router.post("/login", login);
router.post("/logout", logout);
router.post("/resend-verification", resendVerification);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);

export default router;
