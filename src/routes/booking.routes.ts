import { Router } from "express";
import { bookingController } from "../controllers/booking.controller";
import auth from '../middleware/auth';



const router = Router();

router.post('/booking',bookingController.createBooking);
router.get('/booking',auth("admin"),bookingController.getBooking);
router.get('/booking/:id',auth("admin" ,"user"),bookingController.getBookingById);
router.put('/booking/:id',auth("admin" ,"user"),bookingController.putBookingData);
router.delete('/booking/:id',auth("admin" ,"user"),bookingController.deleteBookingData);
        

export const bookingRouter = router;