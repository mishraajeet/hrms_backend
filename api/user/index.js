const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const isValidate = require('../..//auth/isAutherizedUser')
const isValidateRole = require('../../auth/isValidateRole')

router.post('/signup',isValidate,controller.signUp);
router.post('/login',controller.login);
router.post('/createSuperAdmin',controller.createSuperAdmin);

// ********************for All Users****************************//
router.put('/updateProfile?:id',controller.updateUserProfile);
router.put('/deactivateUser?:id',controller.sofDeleteUser);
router.delete('/deleteUser?:id',controller.deleteUser);
router.post('/setPassword',controller.setPassword);
router.post('/forgetPassword',controller.forgetPassword);


// *****************Indivisual User API*************************//
router.post('/signUpUser',controller.signUpUser);
router.post('/RegisterUserProfile',isValidate,controller.RegisterUserProfile);
router.post('/userLogin',controller.login);


module.exports = router;