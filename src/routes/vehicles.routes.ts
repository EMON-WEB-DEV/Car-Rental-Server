import { Router } from "express";
import { vehiclesController } from "../controllers/vehicles.controller";


const router = Router();

router.post('/',vehiclesController.createVehicle);
router.get('/',vehiclesController.getVehicle);

export const vehiclesRouter = router;