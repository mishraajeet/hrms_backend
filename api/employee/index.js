const express = require('express');
const router = express.Router();
const controller = require('./employeePosition.controller');

router.post('/addPosition',controller.addPosition);
router.post('/getAllPositions',controller.getAllPositions);
router.put('/updatePosition?:id',controller.updatePosition);
router.delete('/deleteempPosition?:id',controller.deleteemployeePosition);
router.put('/deleteSubPosition?:id',controller.deleteSubPosition);


module.exports = router;