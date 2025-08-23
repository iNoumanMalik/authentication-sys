import {Router} from 'express'
import {register,verifyEmail,login,logout,resendVerification} from '../controllers/auth.controller'

const router = Router();

router.post('/register',register);
router.post('/verify',verifyEmail);
router.post('/login',login);
router.post('/logout',logout);
router.post('/resend-verification',resendVerification);

export default router;