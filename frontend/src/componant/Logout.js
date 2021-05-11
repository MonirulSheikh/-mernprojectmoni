import React,{useEffect,useContext} from 'react'
import {useHistory} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {UserContext} from "../App"
const Logout = () => {
const {state,dispatch} = useContext(UserContext)



    const history=useHistory()
const Fetdata=async()=>{

try {
    const res=await fetch("/logout",{method:"GET",headers:{
        "Content-type":"application/json",
        Accept:"application/json"
    }})

const data= await res.json()
console.log(state)
if(res.status===200){
history.push("login/")
dispatch({type:"User",payload:false})


}

} catch (error) {
    console.log(error)
}

}

useEffect(() => {
    Fetdata()
}, [])

    return (
        <>
           <h1>Logout</h1>
           <ToastContainer></ToastContainer>
        </>
    )
}

export default Logout
