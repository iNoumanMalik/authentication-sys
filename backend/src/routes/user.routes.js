import { Router } from "express";
import { me,upload,updateProfile,changePassword } from "../controllers/users.controller";
import { requireAuth } from "../middlewares/auth";


const router = Router();

router.get('/me',requireAuth,me)
router.post('/me',requireAuth,upload.single('avatar'),updateProfile)
router.post('/change-password',requireAuth,changePassword)

export default router;