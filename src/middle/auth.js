const jwet=require("jsonwebtoken")
const user=require("../collection/collection")

const authenticate= async(req,res,next)=>{try {
    
const token=req.cookies.Monib;
//console.log("athenticate::"+token)
const veryfy=jwet.verify(token,process.env.SECRET)
//console.log("verify:"+veryfy._id)
const userdetails=await user.findOne({_id:veryfy._id,"tokens.token":token})
//console.log(userdetails)
if(!userdetails){
    console.log("User not Found")

}
req.token=token;
req.details=userdetails;
req.Id=userdetails._id
} catch (error) {
    res.status(401).json({res:"Unauthorized"})
    console.log(`authenticate error:${error}`)
}

next()
}
module.exports=authenticate