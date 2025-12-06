import { Router } from "express";
import { bookingController } from "../controllers/booking.controller";



const router = Router();

router.post('/booking',bookingController.createBooking);
router.get('/booking',bookingController.getBooking);
router.put('/booking/:id',bookingController.putBookingData);
router.delete('/booking/:id',bookingController.deleteBookingData);
        

export const bookingRouter = router;