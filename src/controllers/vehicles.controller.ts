import { Request, Response } from 'express';
import { vehiclesService } from "../services/vehicles.service";

const createVehicle = async (req : Request, res : Response) => {
  
  try {    
        const result = await vehiclesService.vehicleInitialData(req.body);  
 return res.status(201).json({
    success: true,
    massage : 'vehicles created successfully',
    data : result.rows[0]
  })

  }
  catch (error) {
       return res.status(500).json({
          success: false,
          message: 'Server Error',
          error: error
        });
  }
}

const getVehicle = async (req : Request, res : Response) => {
  
  try {    
        const result = await vehiclesService.vehicleGetData();  
 return res.status(201).json({
    success: true,
    massage : 'vehicles get successfully',
    data : result .rows[0]
  })

  }
  catch (error) {
       return res.status(500).json({
          success: false,
          message: 'Server Error',
          error: error
        });
}
}
export const vehiclesController = {
        createVehicle,  
        getVehicle
}       
