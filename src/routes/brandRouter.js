const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', brandController.create);
router.put('/:id', checkRoleMiddleware('ADMIN'), brandController.update);
router.get('/', brandController.getAll);
router.get('/:id', brandController.getOne);
router.post('/:id', checkRoleMiddleware('ADMIN'), brandController.removeOne);

module.exports = router;
