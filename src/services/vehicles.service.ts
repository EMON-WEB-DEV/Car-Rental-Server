import { pool } from "../db/query";

const vehicleInitialData = async (payload: Record<string, unknown>) => {
        const {vehicle_name, type, registration_number, daily_rent_price, availability_status} = payload;
        const result = await pool.query(`
    INSERT INTO vehicles (vehicle_name, type, registration_number, daily_rent_price, availability_status)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [vehicle_name, type, registration_number, daily_rent_price, availability_status]);
        console.log(result);
        return result;
}


const vehicleGetData = async () => {
        
        const result = await pool.query(`
    SELECT * FROM vehicles 
  `);
        return result;
}

const putVehicleData = async (id: number, payload: Record<string, unknown>) => {
        const {vehicle_name, type, registration_number, daily_rent_price, availability_status} = payload;
        const result = await pool.query(`
    UPDATE vehicles
    SET vehicle_name = $1, type = $2, registration_number = $3, daily_rent_price = $4, availability_status = $5
    WHERE id = $6
    RETURNING *
  `, [vehicle_name, type, registration_number, daily_rent_price, availability_status, id]);
        return result;
}

const deleteVehicleData = async (id: number) => {
        const result = await pool.query(`
    DELETE FROM vehicles
    WHERE id = $1
    RETURNING *
  `, [id]);
        return result;
}       




 export const vehiclesService = {
        vehicleInitialData,
        vehicleGetData,
        putVehicleData,
        deleteVehicleData
}