import {  Router } from 'express';
import { usersController } from '../controllers/users.controller';
import auth from '../middleware/auth';

const router = Router();

router.post('/auth/signup',usersController.createUser);
router.get('/auth/signup',auth("admin") , usersController.getUser);
router.get('/auth/signup/:id',auth("admin","customer"), usersController.getUserById);
router.put('/auth/signup/:id',auth("admin","customer"),usersController.putUserData);
router.delete('/auth/signup/:id',auth("admin"),usersController.deleteUserData);

export const userRouter = router;