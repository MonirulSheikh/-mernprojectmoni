const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone_number:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})
const User=mongoose.model("Contact_User",contactSchema)
module.exports=User;