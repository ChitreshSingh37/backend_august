const Users = require("../models/userModel");
const jwt = require("jsonwebtoken")

async function checkLogin(req,res,next){
   try {
    let headers = req.headers.authorization;
    if (!headers) {
      return res.send("no header provided");
    }
    let token = headers.split(" ")[1];

    if (!token) {
      return res.send("no toke provided");
    }

    let payload = jwt.verify(token, "thisisyourprivetkey");
    let existingUser = await Users.findById(payload.userId);

    if (!existingUser) {
      return res.send("you are not allowed to create product");
    }
    next();
    
   } catch (error) {
    res.send(error)
   }
}


module.exports = checkLogin;