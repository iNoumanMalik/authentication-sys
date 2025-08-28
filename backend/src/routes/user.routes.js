import { Router } from "express";
import { me,upload,updateProfile,changePassword } from "../controllers/users.controller.js";
import { requireAuth } from "../middlewares/auth.js";


const router = Router();

router.get('/me',requireAuth,me)
router.post('/me',requireAuth,upload.single('avatar'),updateProfile)
router.post('/change-password',requireAuth,changePassword)

export default router;