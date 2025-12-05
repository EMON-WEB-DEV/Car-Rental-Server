import { Router } from "express";
import { vehiclesController } from "../controllers/vehicles.controller";


const router = Router();

router.post('/vehicles',vehiclesController.createVehicle);
router.get('/vehicles',vehiclesController.getVehicle);

export const vehiclesRouter = router;