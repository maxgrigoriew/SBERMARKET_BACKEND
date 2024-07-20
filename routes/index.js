const Router = require('express');
const router = new Router();
const brandRouter = require('./brandRouter');

router.use('/brand', brandRouter);

module.exports = router;
