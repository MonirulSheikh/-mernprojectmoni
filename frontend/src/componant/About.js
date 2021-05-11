import React,{useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
function About() {
    const history=useHistory()
    const [datas,setData]=useState({})
const callAbout=async()=>{



    try {
        const res=await fetch('/about',{method:"GET",headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },credentials:"include"},)

        const data=await res.json()
       
       // console.log(data)
       
if(res.status===200){
    setData(data)
}else{
history.push("/login")
}


        
    } catch (error) {
        console.log("call About:" +error)
    }
    
}

    useEffect(() => {
       callAbout()
        
    }, [])

    return (
        <>
<div className="container">
<form>
    <div className="row m-auto">
        <div className="col-lg-6  m-auto">
        <h2>About Me</h2>
        <div className=" border">
           <div className="ml-auto">
           <h6>Name:<span>{datas.name}</span></h6>
            <h6>Gender:<span>{datas.sex}</span></h6>
            <h6>Adhar no:<span>{datas.adhar_number}</span></h6>
           </div>
        </div>


        

        
        


        </div>
    </div>
    </form>
</div>
          
        </>
    )
}

export default About
