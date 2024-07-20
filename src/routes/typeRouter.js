const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.post('/', typeController.create);
router.put('/:id', typeController.update);
router.get('/', typeController.getAll);
router.get('/:id', typeController.getOne);
router.post('/:id', typeController.removeOne);

module.exports = router;
