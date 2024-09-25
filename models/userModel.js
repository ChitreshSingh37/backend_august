const mongoose = require("mongoose");


let userSchema = new mongoose.Schema({
  profile:{
    type:String,
  },
   name:{
     type:String,
     required:true,
     minLength:3,
     maxLength:12,
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true,
    minLength:6,
   },
   bio:{
    type:String,
   },
   age:{
    type:Number
   }

})


let Users = mongoose.model("users",userSchema );

module.exports =Users;