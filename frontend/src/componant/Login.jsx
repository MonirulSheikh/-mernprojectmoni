import React,{useContext, useState} from 'react'
import {NavLink,useHistory} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {UserContext} from "../App"
function Login() {
const {state,dispatch }= useContext(UserContext)




    const hist=useHistory()
const [getmail, setgetmail] = useState({
    mail:"",password:""
})
 const [resp,setRes] =useState()
const State=(e)=>{
const { name,value}=e.target
setgetmail({...getmail,[name]:value})
}
const Getdata =async (event)=>{

    event.preventDefault()

const {mail,password}=getmail;
const respos= await fetch("/login",{method:"POST",headers:{
"content-type":"application/json"
},
body:JSON.stringify({
    mail,password
})
});
const data= await respos.json()
//console.log(data)
if(respos.status===400){
    window.alert(data.error)
    setRes(data.error)
}else if(respos.status===200){
   
dispatch({type:"User",payload:true})
    hist.push('/')
}
}
 return (
        <>
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 m-auto">
<h6 className="text-center">{resp}</h6>
<h1 className="text-center">Login Details: </h1>
<form method="POST">

<div className="form-group input-group">

<div className="input-group-prepend">

    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
</div>

<input type="text" className="form-control text-center"  name="mail" value={getmail.mail} placeholder="Email id"
 onChange={State}/>

</div>
<div className="form-group input-group">

<div className="input-group-prepend">

    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
</div>

<input type="text" className="form-control text-center" value={getmail.password} name="password" 
 onChange={State} placeholder="Password"/>

</div>
<input type="submit" className="btn btn-outline-primary" value="Login" onClick={Getdata}/>


<span className="ml-5"> No an Account? </span>
<NavLink to="/register" className=" btn btn-outline-success ml-3">Register here</NavLink>



</form>


            </div>




            </div>





            </div>


<ToastContainer></ToastContainer>
        </>
    )
    }
export default Login
