import { pool } from "../db/config";

const bookingInitialData = async (payload: Record<string, unknown>) => {
       const {customer_id, vehicle_id, rent_start_date, rent_end_date,total_price, status} = payload;
       const result = await pool.query(`
    INSERT INTO bookings (customer_id, vehicle_id, rent_start_date, rent_end_date,total_price, status) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
  `, [customer_id, vehicle_id, rent_start_date, rent_end_date,total_price, status]);
  
        return result;
}


const bookingGetData = async () => {
        
        const result = await pool.query(`
    SELECT * FROM bookings
  `);
        return result;
}
 export const bookingService = {
        bookingInitialData,
        bookingGetData
}