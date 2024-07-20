import Router from 'express';
import typeController from '../controllers/typeController.js';

const router = new Router();

router.post('/', typeController.create);
router.put('/:id', typeController.update);
router.get('/', typeController.getAll);
router.get('/:id', typeController.getOne);
router.post('/:id', typeController.removeOne);

export default router;
