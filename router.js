const error = require('./common/error');

module.exports = app=>{
   app.use('/api/employee',require('./api/employee'));
   app.use('/api/user',require('./api/user'));
   app.use('/api/leave',require('./api/leave'));
  
   app.use(error);
}