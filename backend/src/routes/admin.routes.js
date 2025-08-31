import { Router } from "express";
import { listUsers,updateUser,deleteUser } from "../controllers/admin.controller.js";
import { requireAuth,requireAdmin } from "../middlewares/auth.js";

const router = Router();


router.use(requireAuth, requireAdmin);
router.get('/users', listUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;