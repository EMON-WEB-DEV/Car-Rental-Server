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
          message: 'Server Error ...',
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
    data : result .rows
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

const putVehicleData = async (req : Request, res : Response) => {
  const id = parseInt(req.params.id as string);
  try {
      const result = await vehiclesService.putVehicleData(id, req.body);
      return res.status(200).json({
          success: true,
          message: 'Vehicle data updated successfully',
          data: result.rows[0]
      });
  } catch (error) {
      return res.status(500).json({
          success: false,
          message: 'Server Error',
          error: error
      });
  }
} 

const deleteVehicleData = async (req : Request, res : Response) => {
  const id = parseInt(req.params.id as string);
  try {
      const result = await vehiclesService.deleteVehicleData(id);
      return res.status(200).json({
          success: true,
          message: 'Vehicle data deleted successfully',
          data: result.rows[0]
      });
  } catch (error) {
      return res.status(500).json({
          success: false,
          message: 'Server Error',
          error: error
      });
  }
}


export const vehiclesController = {
        createVehicle,  
        getVehicle,
        putVehicleData,
        deleteVehicleData
}       
