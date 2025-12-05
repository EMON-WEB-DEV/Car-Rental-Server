import { Request, Response, Router } from 'express';
import { usersController } from '../controllers/users.controller';

const router = Router();

router.post('/signup',usersController.createUser);
router.get('/',usersController.getUser);

export const userRouter = router;