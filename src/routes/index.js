const Router = require('express');
const router = new Router();
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');

router.use('/brand', brandRouter);
router.use('/type', typeRouter);

module.exports = router;
