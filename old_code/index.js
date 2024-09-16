// v8 engine + libuv 
// document ,alert , prompt, confirm , console ,fetch
// window,
//global,process

// console.log(global)
// console.log(process.env);


//   let obj =  require('./math')

  
// obj.sum(234,3647);




/*


// Node.js is a runtime environment for executing Javascript code server-side.

// Runtime Environment: Node.js uses the V8 JavaScript engine (the core of Google Chrome) plus the libuv library
for asynchronous i/0 operations, making it efficient for building scalable network applications.

// Non-blocking I/O: Node.js operates on a single-threaded event loop, using non-blocking I/O calls, allowing it to handle thousands / of
          concurrent connections without incurring the cost of thread context switching.

// First-class JavaScript Support: Node.js allows you to write server-side code using JavaScript,
     providing a unified language for  both server and client-side scripts.

// npm: Node.js comes with npm (Node Package Manager), the largest ecosystem of open source libraries that you can use in your project, making it easy to add functionality.

// Module System: Node.js supports module-based architecture, which encourages separation of concerns through reusable code modules.
        It supports both CommonJS modules and ES6 modules, allowing for better code organization.

// Built-in Modules: Node.js provides a rich set of built-in modules (e.g., fs for file system operations, http for networking) that require no external dependencies, 
    facilitating rapid development of applications.

// Asynchronous and Event-Driven: All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.
    js-based server never waits for an API to return data, using events to trigger callbacks when data is ready.

// Global Objects: Unlike browser JavaScript, Node.js has different global objects available (e.g.. global, process) for various
       global functionalities and configuration.

*/
 




// custome module
// inbuilt module
// third party module


  // const os = require('os');

  // console.log(os.homedir());
  // console.log(os.hostname());
  // console.log(os.platform());
  // console.log(os.arch());
  // console.log(os.freemem());
  // console.log(os.totalmem());
  // console.log(os.version());
  // console.log(os.cpus().length);
  // console.log(os.machine());



  // const path = require("path");

  //      user/files/../files/index.html

  //user/files/index.html




  // console.log(path.join("user","files","..","files","index.html"))
  // console.log(path.resolve("user","files","..","files","index.html"))
  // console.log(path.basename("./user/files/index.html"))
  // console.log(path.dirname("./user/files/index.html"))
  // console.log(path.extname("./user/files/index.js"))


  const fs = require("fs").promises;
  console.log("before");
   fs.appendFileSync('./sample.txt'," hello world");
  
  console.log("after");

  console.log("before");

  // fs.readFile('./sample.txt',"utf-8",(err,data)=>{
  //   if(err){
  //     throw err;
  //   }
  //   else{
  //     console.log(data);
  //   }
  // })


  fs.readFile("./sampl.txt","utf-8")
  .then((data)=>{console.log(data)})
  .catch((err)=>console.log(err))


  console.log("after");


  // const fs = require("fs");

  // let home = fs.readFileSync("./home.html","utf-8");
  // let about = fs.readFileSync("./about.html","utf-8");
  // let contact = fs.readFileSync("./contact.html","utf-8");
  // let css = fs.readFileSync("./home.css","utf-8");
 


  // const http = require("http");

  // const server =http.createServer();


  // server.on("request",(req,res)=>{
  //   if(req.url=='/'){
  //     res.end(home)
  //   }
  //   else if(req.url =="/user"&&req.method=="GET"){
  //     res.end("all users")
  //   }
  //   else if(req.url =="/user"&&req.method=="POST"){
  //     res.end("uer registered")
  //   }
  //   else if(req.url =="/contact"){
  //     res.end(contact)
  //   }
  //   else if(req.url =='/home.css'){
  //      res.end(css);
  //   }
   
  // })


  // server.listen(5001);



  // const express = require("express");

  // const server = express();


  // server.get('/',(req,res)=>{
  //   res.send("server is up")
  // })
  // server.post('/',(req,res)=>{
  //   res.send("server is up")
  // })
  


  // server.listen(3000,()=>{
  //   console.log("server is listening on port 3000");
  // });