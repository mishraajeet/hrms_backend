const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//const config = require('config');

require('./config/database');
const app = express();
app.use(morgan('combined'));

// if(!config.get('jwtPrivateKey')){
//    console.error('FATAL ERROR: jwtPrivateKey is not defined!');
//    process.exit(1);
// }

app.use(cors())
app.use((req,res,next)=>{
     //set headers to allow cross origin request.
     res.header("Access-Control-Allow-Origin", "*");
     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

 require('./router')(app);
app.listen(3000,()=>{
    console.log("server is runnig on port 3000...");
})