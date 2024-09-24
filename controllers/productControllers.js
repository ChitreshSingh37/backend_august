const Products = require("../models/productModel");
const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");

async function getAllproducts(req, res) {
  let data = await Products.find();
  res.send(data);
}

async function getSingleProduct(req, res) {
  let id = req.headers.id;
  let product = await Products.findById(id);
  res.send(product);
}



async function createProduct(req, res) {
  try {
   

    let data = req.body;

    let newProduct = await Products.create(data);
    res.send(newProduct);
  } catch (error) {
    console.log("you are in catch block");
    res.send(error);
  }
}

async function deleteProduct(req, res) {
  try {
    

    let id = req.headers.id;
    console.log(id);
    let deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.send("no product found");
    }

    res.send("product deleted");
  } catch (error) {
    res.send(error);
  }
}

async function updateProduct(req, res) {
  try {
   

    let id = req.headers.id;
    let data = req.body;

    let updatedProduct = await Products.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.send(updatedProduct);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getAllproducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
};
