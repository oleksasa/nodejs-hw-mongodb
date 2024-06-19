import { Router } from 'express';
import studentsRouter from './contacts.js';
import authRouter from './auth.js';

const rootRouter = Router();

rootRouter.use('/students', studentsRouter);
rootRouter.use('/auth', authRouter);

export default rootRouter;
