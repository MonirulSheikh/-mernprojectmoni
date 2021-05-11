
//require('dotenv').config()
    
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });
const express=require('express');
const app=express();
const cookieParser = require('cookie-parser')
const router = require("./src/router/router")
app.use(cookieParser())
const port=8001 || process.env.PORT

require("./src/db/connection")
app.use(express.json())
app.use(router)
if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/build"));
    const path =require("path")
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

//app.post('/sign_up' )
app.listen(port)
