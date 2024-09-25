const Users = require("../models/userModel");

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken");


const {validationResult} = require("express-validator");
const apiError = require("../helpers/apiError");

 async function getAllusers(req,res){
   let data = await Users.find();
   res.status(200).json({
    success:true,
    data:data
   })
}


async function getSingleUser(req,res){
    let id = req.headers.id;
    let user = await Users.findById(id);

    res.status(200).json({
        success:true,
        data:user,
       })

}



async function registerUser(req,res,next){

let result = validationResult(req);

let errors = result.errors;

let err = errors.map((er)=>{
    return er.msg;
})

if(err.length){
return next(new apiError(err[0],400));
}

    let data = req.body;

    let existingUser = await Users.findOne({email:data.email})

    if(existingUser){
       return next(new apiError("you are already registered",400))
    }
    
    let hashpassword = bcrypt.hashSync(data.password,10)
    
  let obj ={...data,password:hashpassword}


    let newUser = await  Users.create(obj);
    res.status(201).json({
        success:true,
        data:newUser
    });
}




async function  loginUser(req,res,next) {
    
    let data = req.body;


    let existingUser = await Users.findOne({email:data.email});

    if(!existingUser){
        return next(new Error("no user found please register first"))
    }

    let result = bcrypt.compareSync(data.password,existingUser.password)

    if(!result){
        return next(new Error("wrong password"))
    }


    let token = jwt.sign({userId:existingUser._id},"thisisyourprivetkey",{expiresIn:"30d"})
   

    res.status(200).json({
        success:true,
        data:{existingUser,token}
    })


}












async function updateUser(req,res){
   let id = req.headers.id;
   let data = req.body;

   let updatedUser = await Users.findByIdAndUpdate(id,data,{new:true});
   res.status(200).json({
    success:true,
    data:updatedUser
})

}


async function deleteUser(req,res){
    let id = req.headers.id;


   
    let deletedUser = await Users.findByIdAndDelete(id)
     if(!deletedUser){
        return   res.status(400).json({
            success:false,
            errmsg:"no user found"
        })
     }

     res.status(200).json({
        success:true,
        msg:"user deleted"
     })
     

}



module.exports ={getAllusers,registerUser,loginUser,updateUser,deleteUser,getSingleUser};








