const express = require("express");
const userRouter = require("./routs/userRouter");
const productRouter = require("./routs/productRouter");
const mongoose = require("mongoose");
const connectDB = require("./db");

const server = express();

server.use(express.json());


server.use('/user',userRouter);
server.use('/product',productRouter)


connectDB().then(()=>{
  server.listen(8000, () => {
    console.log("server is listening on port 8000");
  });
})
.catch((err)=>console.log(err));
;








// function firstMiddleware(req,res,next){
//     let data = req.body;
//     if(data.name=="john"){
//       next();
//     }
//     else{
//       res.send("you are not john")
//     }
//   }
//   function secondMiddleware(req,res,next){
//     console.log("you are in secondmiddleware");
//    next();
//   }

//   server.use("/user",firstMiddleware)
//   server.use("/product",secondMiddleware);




// 1. show dbs => to show all databases ;
// 2. use <db_name>  => to create a new dbs or to switch an existing dbs;
// 3. db.dropDatabase() => to drop and existing dbs;
// 4. db.createCollectin(<collection_name>)

// 5. db.<collectin_name>.find() => to find all documets form given collection;
    // db.collection_name.findOne({}) => to find a single document form given collection;
// 6. db.<collection_name>.insertOne({}) => to insert a document into given collection;
// 7. db.<collection_name>.insertMany([{},{}...]) => to insert multiple document into given collection at a time;
// 8. db.<collection_name>.updateOne({query},{$set:{data}}) => to update single document;
// 9. db.<collection_name>.updateMany({query},{$set:{data}}) => to update multiple document;
//10. db.<colleciton_name>.deleteOne({}) => to delete single document;
//10. db.<colleciton_name>.deleteMany({}) => to delete multiple documents;



