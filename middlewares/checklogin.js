const apiError = require("../helpers/apiError");
const Users = require("../models/userModel");
const jwt = require("jsonwebtoken")

async function checkLogin(req,res,next){
   try {
    let headers = req.headers.authorization;
    if (!headers) {
      return next("no header provided")
    }
    let token = headers.split(" ")[1];

    if (!token) {
      return next("no token provided")
    }

    let payload = jwt.verify(token, "thisisyourprivetkey");
    let existingUser = await Users.findById(payload.userId);

    if (!existingUser) {
      return res.send("you are not allowed to create product");
    }
    next();
    
   } catch (error) {
    next(new apiError(error.message,500))
   }
}


module.exports = checkLogin;