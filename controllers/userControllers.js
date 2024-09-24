const Users = require("../models/userModel");

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken");


const {validationResult} = require("express-validator")

 async function getAllusers(req,res){
   let data = await Users.find();
   res.send(data);
}


async function getSingleUser(req,res){
    let id = req.headers.id;
    let user = await Users.findById(id);

    res.send(user);

}



async function registerUser(req,res){

let result = validationResult(req);

let errors = result.errors;

let err = errors.map((er)=>{
    return er.msg;
})

if(err.length){
return res.send(err[0]);
}

    let data = req.body;

    let existingUser = await Users.findOne({email:data.email})

    if(existingUser){
        return res.send("you are already registered")
    }
    
    let hashpassword = bcrypt.hashSync(data.password,10)
    
  let obj ={...data,password:hashpassword}


    let newUser = await  Users.create(obj);
    res.send(newUser);
}




async function  loginUser(req,res) {
    
    let data = req.body;


    let existingUser = await Users.findOne({email:data.email});

    if(!existingUser){
        return res.send("no user found please register first")
    }

    let result = bcrypt.compareSync(data.password,existingUser.password)

    if(!result){
        return res.send("wrong password")
    }


    let token = jwt.sign({userId:existingUser._id},"thisisyourprivetkey",{expiresIn:"30d"})
   

    res.send({existingUser,token})


}












async function updateUser(req,res){
   let id = req.headers.id;
   let data = req.body;

   let updatedUser = await Users.findByIdAndUpdate(id,data,{new:true});
   res.send(updatedUser)

}


async function deleteUser(req,res){
    let id = req.headers.id;


   
    let deletedUser = await Users.findByIdAndDelete(id)
     if(!deletedUser){
        return   res.send('no user found')
     }

     res.send("user deleted")
     

}



module.exports ={getAllusers,registerUser,loginUser,updateUser,deleteUser,getSingleUser};








