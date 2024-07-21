import Router from 'express';
import brandRouter from './brandRouter.js';
import typeRouter from './typeRouter.js';
import deviceRouter from './deviceRouter.js';

const router = new Router();

router.use('/brand', brandRouter);
router.use('/type', typeRouter);
router.use('/device', deviceRouter);

export default router;