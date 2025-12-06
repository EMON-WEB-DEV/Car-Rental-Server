import { NextFunction, Request, Response } from "express"

const auth = () => {
 
         return (req: Request, res: Response, next: NextFunction) => {
                const authHeader = req.headers.authorization;
                if (!authHeader) {
                
                return res.status(401).json({ message: "Authorization header missing" });
                }

                
                

                next();
        }

}

export default auth;