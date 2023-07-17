const error = require('./common/error');

module.exports = app=>{
   app.use('/api/user',require('./api/user'));
  
   app.use(error);
}