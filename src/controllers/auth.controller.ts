import { Request, Response } from "express";
import { authService } from "../services/auth.service";

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const result = await authService.loginUser(email, password);
        if (result === null) {
            return res.status(404).json({ message: "User not found" });
        }
        if (result === false) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ user: result.user, token: result.token });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const authController = {
    loginUser,
};