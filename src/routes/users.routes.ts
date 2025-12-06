import {  Router } from 'express';
import { usersController } from '../controllers/users.controller';
import auth from '../middleware/auth';

const router = Router();

router.post('/auth/signup',usersController.createUser);
router.get('/auth/signup',auth(), usersController.getUser);
router.put('/auth/signup/:id',auth(),usersController.putUserData);
router.delete('/auth/signup/:id',auth(),usersController.deleteUserData);

export const userRouter = router;