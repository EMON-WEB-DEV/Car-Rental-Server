import { Pool } from "pg"
import dotenv from "dotenv"
import path from "path"


dotenv.config({path : path.join(process.cwd(),".env")})
const pool = new Pool ({
  connectionString: `${process.env.DB_CONFIG}`
})

export const initDb = async () => {

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
      );
    `)
}

export { pool };