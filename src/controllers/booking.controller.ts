import { Request, Response } from "express";
import { bookingService } from "../services/booking.service";

const createBooking = async (req : Request, res : Response) => {
  
  try {    
        const result = await bookingService.bookingInitialData(req.body);  
 return res.status(201).json({
    success: true,
    massage : 'booking created successfully',
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

const getBooking = async (req : Request, res : Response) => {
  
  try {    
        const result = await bookingService.bookingGetData();  
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
export const bookingController = {
        createBooking,  
        getBooking
}