const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        default:"nice product"
    },
    price:{
        type:Number,
        required:true,
    }

})


let Products = mongoose.model("products",productSchema);
module.exports = Products;