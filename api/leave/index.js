const express = require('express');
const router = express.Router();
const controller = require('./leave.controller');


router.post('/create-absence',controller.createLeave);
router.post('/getLeave',controller.getLeave);
router.put('/ActionTakenLeave?:id',controller.ActionTakenLeave);

module.exports = router;