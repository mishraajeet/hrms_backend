const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const isValidate = require('../..//auth/isAutherizedUser')
const isValidateRole = require('../../auth/isValidateRole')

router.post('/registerUser',controller.registerUser);
router.post('/getAllUsers',controller.getAllUsers);
router.put('/updateProfile?:id',controller.updateUserProfile);
router.get('/getEmpBirthday',controller.getEmpBirthday);
router.get('/getNewJoiningEmp',controller.getNewJoiningEmp);

router.get('/saveSequenceNumber',controller.saveSequenceNumber);

router.post('/login',controller.resellerLogin);
router.post('/createSuperAdmin',controller.createSuperAdmin);

// ********************for All Users****************************//
router.put('/deactivateUser?:id',controller.sofDeleteUser);
router.delete('/deleteUser?:id',controller.deleteUser);
router.post('/setPassword',controller.setPassword);
router.post('/forgetPassword',controller.forgetPassword);



module.exports = router;