import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import config from "..";

const auth = () => {
 
         return (req: Request, res: Response, next: NextFunction) => {
                const token = req.headers.authorization;
                if (!token) {
                
                return res.status(401).json({ message: "Authorization header missing" });
                }
                const decoded = jwt.verify(token, config.jwtSecret as string);
                if (!decoded) {
                
                return res.status(401).json({ message: "Invalid token" });
                }

                next();
        }

}

export default auth;
