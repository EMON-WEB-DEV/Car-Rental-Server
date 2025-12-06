import { Request, Response, Router } from 'express';
import { usersController } from '../controllers/users.controller';

const router = Router();

router.post('/auth/signup',usersController.createUser);
router.get('/auth/signup',usersController.getUser);
router.put('/auth/signup/:id',usersController.putUserData);
router.delete('/auth/signup/:id',usersController.deleteUserData);

export const userRouter = router;