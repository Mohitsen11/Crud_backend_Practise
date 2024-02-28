const express = require('express');

const router = express.Router();

const infoRoutes = require('./info-routes');
const userRoutes = require('./user-routes');

router.use('/info', infoRoutes);
router.use('/user', userRoutes);

module.exports = router;