import path from "path";
import  dotenv  from 'dotenv';

dotenv.config({path : path.join(process.cwd(),".env")})

const config = {
  port: process.env.PORT || 5050,
  connetdb: process.env.DB_CONFIG,
  jwtSecret: process.env.JWT_SECRET,
};
export default config;