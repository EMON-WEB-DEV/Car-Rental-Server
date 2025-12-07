import { Router } from "express";
import { vehiclesController } from "../controllers/vehicles.controller";
import auth from '../middleware/auth';


const router = Router();

router.post('/vehicles',vehiclesController.createVehicle);
router.get('/vehicles',auth("admin"),vehiclesController.getVehicle);
router.get('/vehicles/:id',auth("admin" ,"user"),vehiclesController.getVehicleById);
router.put('/vehicles/:id',auth("admin" ,"user"),vehiclesController.putVehicleData);
router.delete('/vehicles/:id',auth("admin" ,"user"),vehiclesController.deleteVehicleData);

export const vehiclesRouter = router;