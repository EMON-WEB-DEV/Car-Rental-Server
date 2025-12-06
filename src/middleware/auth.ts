import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import config from "..";

const auth = () => {
 
        return (req: Request, res: Response, next: NextFunction) => {
              try{
                const token = req.headers.authorization;
                if (!token) {
                
                return res.status(401).json({ message: "Authorization header missing" });
                }
                const decoded = jwt.verify(token, config.jwtSecret as string);
                req.user = decoded as jwt.JwtPayload;
                if (!decoded) {
                
               
                }
               }
                 catch(err){
                        return res.status(401).json({ message: "Unauthorized" });
               }

                next();
        }

}

export default auth;
