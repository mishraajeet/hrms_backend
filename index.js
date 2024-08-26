const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
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

app.use(express.static('client'));

app.use(express.static('public'))


const storage = multer.diskStorage({
    destination: (req,file,callBack) =>{
      callBack(null,'./public/profile')
    },
    filename: (req,file,callBack) => {
      callBack( null, `profile_${file.originalname}`)
    }
  })
  
  var imgUpload = multer({storage: storage });
  
  app.post('/emp_profile', imgUpload.single('image'),(req,res,next)=>{
     const file = req.file
     if(!file){
       const error = new Error("Please upload a file...");
       error.httpStatusCode = 400
     }
     res.send({imageUrl: `/profile/${req.file.filename}`});
   });

require('./router')(app);

app.get('*',(req,res) => {
  res.sendFile(path.join(__dirname ,'client/index.html'));
});

app.listen(process.env.PORT || 3000,'0.0.0.0',()=>{
    console.log("server is runnig on port 3000...");
})