const router = require('express').Router();
const apiRoutes = require('./');

router.use('/api', apiRoutes);

module.exports = router;
