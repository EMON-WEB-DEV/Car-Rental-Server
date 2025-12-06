import { pool } from "../db/query"
import  bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from "..";



const loginUser = async (email : string, password : string) => {
        const result = await pool.query(`SELECT * FROM users WHERE email = $1 `, [email,]);
        if (result.rows.length === 0) {
            return null;
        }
        const user = result.rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return false;
        }
      
        const token = jwt.sign({ id: user.id, email: user.email ,role: user.role }, config.jwtSecret as string, { expiresIn: '7d' });

        return { user, token };

};

export const authService = {
    loginUser,
};