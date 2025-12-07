import { Router } from "express";
import { vehiclesController } from "../controllers/vehicles.controller";
import auth from '../middleware/auth';


const router = Router();

router.post('/vehicles',vehiclesController.createVehicle);
router.get('/vehicles',auth("admin","customer"),vehiclesController.getVehicle);
router.get('/vehicles/:id',auth("admin" ,"customer"),vehiclesController.getVehicleById);
router.put('/vehicles/:id',auth("admin"),vehiclesController.putVehicleData);
router.delete('/vehicles/:id',auth("admin"),vehiclesController.deleteVehicleData);

export const vehiclesRouter = router;