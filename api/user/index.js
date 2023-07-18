const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const isValidate = require('../..//auth/isAutherizedUser')
const isValidateRole = require('../../auth/isValidateRole')

router.post('/signup',isValidate,controller.signUp);
router.post('/setPassword',controller.setPassword);
router.post('/login',controller.login);
router.post('/userLogin',controller.login);
router.post('/forgetPassword',controller.forgetPassword);
router.post('/createSuperAdmin',controller.createSuperAdmin);

module.exports = router;