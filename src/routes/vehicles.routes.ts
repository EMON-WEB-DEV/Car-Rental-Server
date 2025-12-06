import { Router } from "express";
import { vehiclesController } from "../controllers/vehicles.controller";


const router = Router();

router.post('/vehicles',vehiclesController.createVehicle);
router.get('/vehicles',vehiclesController.getVehicle);
router.put('/vehicles/:id',vehiclesController.putVehicleData);
router.delete('/vehicles/:id',vehiclesController.deleteVehicleData);

export const vehiclesRouter = router;