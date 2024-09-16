const express = require("express");

const Router = express.Router();


//http://localhost:8000/product/


Router.get('/',(req,res)=>{
    res.send("all products")
})
Router.post('/create',(req,res)=>{
    res.send("product created")
})
Router.delete("/delete",(req,res)=>{
    res.send("product deleted")
})








module.exports=Router;