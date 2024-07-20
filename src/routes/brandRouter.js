import Router from 'express';
import brandController from '../controllers/brandController.js';
import checkRoleMiddleware from '../middleware/CheckRoleMiddleware.js';

const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create);
router.put('/:id', checkRoleMiddleware('ADMIN'), brandController.update);
router.get('/', brandController.getAll);
router.get('/:id', brandController.getOne);
router.post('/:id', checkRoleMiddleware('ADMIN'), brandController.removeOne);

export default router;
