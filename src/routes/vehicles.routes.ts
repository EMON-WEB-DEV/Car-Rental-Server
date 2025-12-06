import { Router } from "express";
import { vehiclesController } from "../controllers/vehicles.controller";
import auth from '../middleware/auth';


const router = Router();

router.post('/vehicles',vehiclesController.createVehicle);
router.get('/vehicles',auth(),vehiclesController.getVehicle);
router.put('/vehicles/:id',auth(),vehiclesController.putVehicleData);
router.delete('/vehicles/:id',auth(),vehiclesController.deleteVehicleData);

export const vehiclesRouter = router;