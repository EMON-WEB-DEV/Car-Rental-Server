import { Router } from "express";
import { bookingController } from "../controllers/booking.controller";



const router = Router();

router.post('/booking',bookingController.createBooking);
router.get('/booking',bookingController.getBooking);
        

export const bookingRouter = router;