import { Router } from "express";
import { bookingController } from "../controllers/booking.controller";
import auth from '../middleware/auth';



const router = Router();

router.post('/booking',bookingController.createBooking);
router.get('/booking',auth(),bookingController.getBooking);
router.put('/booking/:id',auth(),bookingController.putBookingData);
router.delete('/booking/:id',auth(),bookingController.deleteBookingData);
        

export const bookingRouter = router;