const mongoose = require("mongoose");

async function connectDB(){
  await  mongoose.connect('mongodb://127.0.0.1:27017/mern_august')
.then(()=>console.log("connected to database."))

}

module.exports = connectDB;