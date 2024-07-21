import Router from 'express';
import deviceController from '../controllers/deviceController.js';

const router = new Router();

router.post('/', deviceController.create);
router.put('/:id', deviceController.update);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.post('/:id', deviceController.removeOne);

export default router;
