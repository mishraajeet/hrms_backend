const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.post('/signup',controller.signUp);
router.post('/setPassword',controller.setPassword);
router.post('/createSuperAdmin',controller.createSuperAdmin);

module.exports = router;