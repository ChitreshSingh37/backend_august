const express = require("express");

const Router = express.Router();

//http://localhost:8000/user

Router.get("/",(req,res)=>{
    res.send("all users")
});
Router.post("/register",(req,res)=>{
    res.send("user registered")
})

Router.put("/update",(req,res)=>{
    res.send("user updated")
})
Router.delete('/delete',(req,res)=>{
    res.send("user deleted")
})









module.exports=Router;