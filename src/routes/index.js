import Router from 'express';
import brandRouter from './brandRouter.js';
import typeRouter from './typeRouter.js';

const router = new Router();

router.use('/brand', brandRouter);
router.use('/type', typeRouter);

export default router;