const express = require("express");
const Users = require("../models/userModel");
const {
  getAllusers,
  registerUser,
  updateUser,
  deleteUser,
  getSingleUser,
  loginUser,
} = require("../controllers/userControllers");

const validations_middlewares = require("../middlewares/validationMiddleware");

const Router = express.Router();

//http://localhost:8000/user

Router.get("/", getAllusers);
Router.get("/singleuser",getSingleUser)
Router.post("/register", validations_middlewares, registerUser);
Router.post("/login", loginUser);

Router.put("/update", updateUser);
Router.delete("/delete", deleteUser);

module.exports = Router;
