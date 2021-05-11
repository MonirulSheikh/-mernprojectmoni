import React,{useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"

function Contact() {
    const history=useHistory()
    const [datas,setData]=useState({name:"",email:"",phone:"",message:""})
    const callAbout=async()=>{



        try {
            const res=await fetch('/getdata',{method:"GET",headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },credentials:"include"},)
    
            const data=await res.json()
            //console.log(data)
           // console.log(data)
           
    if(res.status===200){
        setData({...datas,name:data.name ,email:data.email,phone:data.phone})
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
    //send data in backend
        const handleInputs=(e)=>{
            const {name,value}=e.target
        
            setData({...datas,[name]:value})
        }
 const SendDAtas=async(even)=>{
    even.preventDefault()
const {name,phone,email,message}=datas
const res=await fetch("/contact" ,{method:"POST",headers:{
    "Content-Type":"application/json"
},body:JSON.stringify({name,email,phone,message})})

const detail=await res.json()
console.log(detail)
if(res.status===400 || !detail ){
    window.alert("contact fail")
}else if(res.status===200){
    window.alert(detail.succ)
}

/*
if(response.status===200){
    window.alert(detail.response)
}else if(response.status===4000){
    window.alert(detail.response)
}*/
 }





    return (
        <>
           <div className="container">
               <div className="row">
                   <div className="col-lg-10 moni">
                       <div className="row ">
                       <form className="" method="POST">
                       <div className="my-5 d-flex justify-content-center align-items-center">
                           <div className="col-md-4 mb-3">
                           <input type="text" placeholder="Your Name" className="text-center form-control" 
                           value={datas.name} onChange={handleInputs} name="name"/>

                           </div>
                           <div className="col-md-5 mb-3 ">
                           <input type="text" placeholder="Your Email" className="text-center form-control" 
                           value={datas.email} onChange={handleInputs} name="email"/>

                           </div>
                           <div className="col-md-3 mb-3">
                           <input type="text" placeholder="Your Phone no" className="text-center form-control"
                            value={datas.phone} onChange={handleInputs} name="phone"/>

                           </div>
                           </div>
                         <div className="col-md-7  moni2 m-auto">
                             <textarea name="" id="" cols="60" rows="10" className="text-center form-control" 
                             onChange={handleInputs} placeholder="Message " name="message"  value={datas.message}></textarea>
                         </div>
                               <div className="col-lg-5 m-auto ">
                                   <button className="btn btn-outline-primary my-5" type="submit" onClick={SendDAtas}>SEND MESSAGE</button>
                               </div>

                         </form>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Contact
