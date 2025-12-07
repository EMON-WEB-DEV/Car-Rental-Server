import { Router } from "express";
import { authController } from "../controllers/auth.controller";


const router = Router();

router.post("/auth/signin", authController.loginUser);
router.get("/auth/signin/:id", authController.getCurrentUser);


export const authRouter = router;