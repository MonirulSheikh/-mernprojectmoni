const mongoose=require("mongoose");

const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');

const mschema=new mongoose.Schema({
name:{
    type:String,
    require:true,
    uppercase:true,
    unique:true
},
email:{
    type:String,
    require:true,
 
    unique:true
},
phone:{
    type:Number,
    unique:true,
require:true
}
,adhar_number:{
type:Number,
unique:true,

},
password:{

    type:String,
    require:true,
   
   
},date:{
    type:Date,
    default:Date.now
},messages:[
      {  name:{
        type:String,
        require:true,
        uppercase:true,
   
    },
    email:{
        type:String,
        require:true,
     
       
    },
    phone:{
        type:Number,
     

     },
     message:{
        type:String,
        require:true,
     }
 }
],  
sex:{
    type:String,
    require:true
},tokens:[
    {token:{
        type:String,
    require:true
    }

    }
]

})
mschema.methods.addMessage=async function(name,phone,email,message){
    try {
        this.messages= await this.messages.concat({name,phone,email,message})
        await this.save();
        return this.messages;
    } catch (error) {
       console.log(error) 
    }
}
mschema.pre('save', async function(next){
    if(this.isModified('password')){
this.password= await bcrypt.hash(this.password,10)

    }

    next()
})
/*
mschema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10)
    }
    next()
})

/*

mschema.methods.createtoken= async function(){

    try {
        
const token=await jwt.sign({_id:this._id},process.env.SECRET)
this.tokens=this.tokens.concat({token:token})
    } catch (error) {
        console.log(`token function fail:${error}`)
    }
}
*/

mschema.methods.createToken=async function(){
    try {
        const token= await jwt.sign({_id:this._id},process.env.SECRET)
this.tokens= this.tokens.concat({token:token})
await this.save()
 return token
    } catch (error) {
        console.log(`Token poblr:${error}`)
    }
  
}

const collection= mongoose.model('OBC',mschema);
module.exports =collection