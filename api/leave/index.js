const controller = require('./leave.controller');


router.post('/create-absence',controller.createLeave);


module.exports = router;