const mongoose=require('mongoose');
const db="mongodb://localhost:27017/Newset"
mongoose.connect(db,{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false}).then(()=>{
    console.log("connection successful")
}).catch((err)=>{

    console.log(` connection failed:${err}`)
})