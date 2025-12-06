import { Router } from "express";
import { authController } from "../controllers/auth.controller";


const router = Router();

router.post("/auth/login", authController.loginUser);
router.get("/auth/login/:id", authController.getCurrentUser);


export const authRouter = router;