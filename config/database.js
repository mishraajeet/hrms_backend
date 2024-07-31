const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hrms',{useNewUrlParser:true, useUnifiedTopology:true})
   .then(()=> console.log(" MoingoDb is connected at port 27017..."))
   .catch(err=> console.log("MongoDb is not connected...",err.message))