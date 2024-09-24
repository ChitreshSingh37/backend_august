const express = require("express");
const { getAllproducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require("../controllers/productControllers");
const checkLogin = require("../middlewares/checklogin");

const Router = express.Router();


//http://localhost:8000/product/


Router.get('/',getAllproducts)
Router.get('/singleproduct',getSingleProduct)
Router.post('/create',checkLogin,createProduct)
Router.put('/update',checkLogin,updateProduct)
Router.delete('/delete',checkLogin,deleteProduct)



module.exports=Router;