const mongoose = require("mongoose");
require('dotenv').config();
// DB="mongodb+srv://lahariritik:passworddb1@user.hapqdkl.mongodb.net/User"
DB="mongodb://localhost:27017/Full_Authentication"
mongoose.connect(DB,{} ).then(()=>{
	console.log('connection succesfully');
}).catch((err)=>{
	console.log('Not Connected Successfully',err);
})
    