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
const putBookingData = async (id: number, payload: Record<string, unknown>) => {
        const {customer_id, vehicle_id, rent_start_date, rent_end_date,total_price, status} = payload;
        const result = await pool.query(`
    UPDATE bookings
    SET customer_id = $1, vehicle_id = $2, rent_start_date = $3, rent_end_date = $4, total_price = $5, status = $6
    WHERE id = $7
    RETURNING *
  `, [customer_id, vehicle_id, rent_start_date, rent_end_date,total_price, status, id]);
        return result;
}

const deleteBookingData = async (id: number) => {
        const result = await pool.query(`
    DELETE FROM bookings
    WHERE id = $1
    RETURNING *
  `, [id]);
        return result;
}

 export const bookingService = {
        bookingInitialData,
        bookingGetData,
        putBookingData,
        deleteBookingData
}