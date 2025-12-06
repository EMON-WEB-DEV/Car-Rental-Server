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


/*const userGetData = async () => {
        
        const result = await pool.query(`
    SELECT * FROM users 
  `); 
        return result;
}*/
const userGetData = async () => {
  const result = await pool.query(`
    SELECT id, name, email, phone, role
    FROM users
  `);
  return result;
};


const putUserData = async (id: number, payload: Record<string, any>) => {
        const {name , email , password ,phone , role} = payload;
        const hashPassword =  await hash(password, 14);
        const result = await pool.query(`
    UPDATE users
    SET name = $1, email = $2, password = $3, phone = $4, role = $5
    WHERE id = $6
    RETURNING *
  `, [name, email, hashPassword, phone, role, id]);
        return result;
}

const deleteUserData = async (id: number) => {
        const result = await pool.query(`
    DELETE FROM users
    WHERE id = $1
    RETURNING *
  `, [id]);
        return result;
}       




export const usersService = {
        userInitialData ,
        userGetData ,
        putUserData,
        deleteUserData
}