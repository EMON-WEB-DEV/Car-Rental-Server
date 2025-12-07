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
    massage : 'booking get successfully',
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

const getBookingById = async (req : Request, res : Response) => {
  const id = parseInt(req.params.id as string);
  try {
      const result = await bookingService.bookingGetDataById(id);
      return res.status(200).json({
          success: true,
          message: 'Booking data retrieved successfully',
          data: result.rows[0]
      });
  } catch (error) {
      return res.status(500).json({
          success: false,
          message: 'Server Error',
          error: error
      });
  }
};


const putBookingData = async (req : Request, res : Response) => {
  const id = parseInt(req.params.id as string);
  try {
      const result = await bookingService.putBookingData(id, req.body);
      return res.status(200).json({
          success: true,
          message: 'Booking data updated successfully',
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

const deleteBookingData = async (req : Request, res : Response) => {
  const id = parseInt(req.params.id as string);
  try {
      const result = await bookingService.deleteBookingData(id);
      return res.status(200).json({
          success: true,
          message: 'Booking data deleted successfully',
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

export const bookingController = {
        createBooking,  
        getBooking,
        getBookingById,
        putBookingData,
        deleteBookingData
}