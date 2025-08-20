import {Router} from 'express'
import {register,verifyEmail,login,logout} from '../controllers/auth.controller'

const router = Router();

router.post('/register',register);
router.post('/verify',verifyEmail);
router.post('/login',login);
router.post('/logout',logout);

export default router;