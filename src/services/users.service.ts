import { hash } from "bcryptjs";
import { pool } from "../db/config";

const userInitialData = async (payload: Record<string, any>) => {
        const {name , email , password ,phone , role} = payload;
        const hashPassword =  await hash(password, 14);
        const result = await pool.query(`
    INSERT INTO users (name, email, password, phone, role)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [name, email, hashPassword, phone, role]);
        return result;
}


const userGetData = async () => {
        
        const result = await pool.query(`
    SELECT * FROM users 
  `);
        return result;
}



export const usersService = {
        userInitialData ,
        userGetData
}