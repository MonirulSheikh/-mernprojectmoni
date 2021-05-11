const express=require('express')
const router= new express.Router();
const collection= require("../collection/collection")
const bcrypt= require("bcryptjs")
const user =require("../collection/contactUs")
const authenticate=require("../middle/auth")

//Home page
router.get('/',(req,res)=>{
    res.send('home page')
    
    })
//Home page
//login page start
    router.post('/login' ,async (req,res)=>{
const { mail,password}=req.body;
//console.log("mail:"+mail  +"pass:"+password)
if(!mail || !password){
  res.status(400).json({error:"Fill all field"})
}

try {
  
  const infor= await collection.findOne({email:mail})

  //const verify=bcrypt.compare(password,infor.password) 

  const ver=bcrypt.compare(password,infor.password)

  if(ver){
    token= await infor.createToken();
 // console.log(token)
  res.cookie("Monib",token,{httpOnly:true})

    res.status(200).json({response:"Login Succesful"})
    console.log("Login Succesful")
    
  }
 //const token= await infor.createToken();

/*
if(verify){
  console.log("login suceesful")
  const token= await infor.createtoken();
}*/
/*
if(password===infor.password){
res.status(200).json({response:"Login Succesful"})
  console.log("Login Succesful")
}*/
} catch (error) {
  console.log("login err:"+error)
}

    })
//login page End
    
//Register Start
router.post("/register",async (req,res)=>{
  
const { fname,email,sex,adhar,phone,pass,cpass}=req.body;

  if(!fname || !email || !phone || !pass|| !cpass ||!adhar ||!sex){
  return res.status(428).json({error:" Please Fill All The Field"})
    //console.log("no data")
  }
  //console.log( `name: ${fname}  email: ${email}  sex: ${sex}  ahar: ${adhar}  phone: ${phone}  pass: ${pass}  cpass:${cpass}`)



  try {
     const info= await collection.findOne({email:email})
if(info){
return res.status(428).json({error:"Email id alredy exit"})
  console.log("Email id alredy exit")
}

 else if(pass===cpass){
const data= new collection({

name:fname,email:email,phone:phone, adhar_number:adhar,password:pass,sex:sex

})
token=await  data.createToken()

const result= await data.save()


 return res.status(201).json({Message:"Registation Successful"})

res.send(result)
console.log(result)
}else{
  return res.status(428).json({error:"password not match"})
  
}
    
}    
 catch(error) {
      console.log("back register"+error)
    } 
  })
//Register End

  //About me Start
router.get("/about",authenticate,(req,res)=>{
 res.status(200).json(req.details)

})
 //About me End
//Contact Us Start 
router.get("/getdata",authenticate,(req,res)=>{
  res.status(200).json(req.details)
})

//Contact Us End
router.post("/contact",authenticate, async(req,res)=>{
  const {name,phone,email,message}=req.body
if(!name || !phone || !email || !message){
  console.log(name)
  //console.log(message)
 return res.status(400).json({response:"Please fill the All field"})
}
try {
  

  const sender= await collection.findOne({_id:req.Id})


if(sender){
  const messages= await sender.addMessage(name,phone,email,message)
if(messages){
  res.status(200).json({succ:"Message send Suceesful"})
}
await sender.save()
}

} catch (error) {
  res.status(400).json({err:error})
  console.log(error)
}
})

// log lout  start
router.get("/logout",(req,res)=>{
  console.log("logout sucessful")
 res.clearCookie("Monib")
 res.status(200).json({message:"Log out Succesful"})
 console.log("logout sucessful")
})
// log out End
//console.log( `name: ${fname}  email: ${email}  sex: ${sex}  ahar: ${adhar}  phone: ${phone}  pass: ${pass}  cpass:${cpass}`)


    
module.exports=router;