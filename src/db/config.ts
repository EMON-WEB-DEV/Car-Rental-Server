import { Pool } from "pg"
import dotenv from "dotenv"
import path from "path"


dotenv.config({path : path.join(process.cwd(),".env")})
const pool = new Pool ({
  connectionString: `${process.env.DB_CONFIG}`
})

export const initDb = async () => {
// users table

await pool.query(`
  CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    role VARCHAR(50) NOT NULL
  );
`);

await pool.query(`
  CREATE TABLE IF NOT EXISTS Vehicles (
    id SERIAL PRIMARY KEY,
    vehicle_name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    registration_number VARCHAR(100) UNIQUE NOT NULL,
    daily_rent_price NUMERIC(10, 2) NOT NULL,
    availability_status VARCHAR(50) NOT NULL
  );
`);
await pool.query(`
    CREATE TABLE IF NOT EXISTS Bookings (
      id SERIAL PRIMARY KEY,
      customer_id INTEGER REFERENCES Users(id),
      vehicle_id INTEGER REFERENCES Vehicles(id),
      rent_start_date DATE NOT NULL,
      rent_end_date DATE NOT NULL,
      total_price NUMERIC(10, 2) NOT NULL,
      status VARCHAR(50) NOT NULL
    ) `)

    
}

export { pool };