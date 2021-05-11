import React,{useState} from 'react'
import {NavLink,useHistory} from "react-router-dom"


function Register() {
const history=useHistory()
const [user, setuser] = useState({
    fname:'',email:"",sex:"",adhar:"",phone:"",pass:"",cpass:""
})

const [err,setErr]=useState()
//const history=useHistory()
const handleInput=(event)=>{
const {value,name}=event.target
setuser({...user,[name]:value})


}

    const DataSend =async(eb)=>{
        eb.preventDefault()

      
    const {fname,email,sex,adhar,phone,pass,cpass}=user;

    const res= await fetch("/register",{method:"POST",headers:{
        
        "content-type":"application/json"
        
    },
    body:JSON.stringify({
       
        //name:fname,emeeail:email,sex:sex,adhar_number:adhar,phone:phone,password:pass
        //fname:fname,email:email,sex:sex,phone:phone,pass:pass,cpass:cpass,adhar:adhar
        fname,email,sex,adhar,phone,pass,cpass
    })
    
    
    
    
    });

    const deta= await res.json()
 
    if(deta.error){
        
    window.alert(deta.error)
    setErr(deta.error)
    console.log('Registation fail')
    }else{

    history.push('/login')
   window.alert("succesful")
   console.log("Registation Successful")
    }

    
}


 






    return (
    
        <>
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 m-auto">
<h6>{err}</h6>
<h1 className="text-center">Registaion Details:</h1>
<form  method="POST">

<div className="form-group input-group">

<div className="input-group-prepend">

    <span className="input-group-text"><i className="fas fa-user"></i></span>
</div>

<input type="text" className="form-control text-center"  name="fname" onChange={handleInput} value={user.fname} placeholder="Inter Your Name"/>

</div>

<div className="form-group input-group">

<div className="input-group-prepend">

    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
</div>

<input type="text" className="form-control text-center"  name="email" onChange={handleInput} value={user.email} placeholder="Email_id"/>

</div>
<div className="m-auto">
Gender: 	&nbsp;
<div class="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="sex" value="Male"  onChange={handleInput}/>
  <label className="form-check-label" for="inlineRadio1">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="sex" value="Female" onChange={handleInput}/>
  <label className="form-check-label" for="inlineRadio2">Female</label>
</div>

</div>
<div className="form-group input-group">

<div className="input-group-prepend">

    <span className="input-group-text"><i className="fas fa-fingerprint"></i></span>
</div>

<input type="text" className="form-control text-center"  name="adhar"  onChange={handleInput} value={user.adhar} placeholder="Adhar_Number"/>

</div>
<div className="form-group input-group">

<div className="input-group-prepend">

    <span className="input-group-text"><i className="fas fa-phone-volume"></i></span>
</div>

<input type="text" className="form-control text-center"  name="phone"  onChange={handleInput} value={user.phone} placeholder="Mobile number"/>

</div>

<div className="form-group input-group">

<div className="input-group-prepend">

    <span className="input-group-text"><i className="fas fa-lock"></i></span>
</div>

<input type="text" className="form-control text-center"  name="pass" onChange={handleInput} value={user.pass} placeholder="Password"/>

</div>
<div className="form-group input-group">

<div className="input-group-prepend">

    <span className="input-group-text"><i className="fas fa-lock"></i></span>
</div>

<input type="text" className="form-control text-center"  name="cpass"  onChange={handleInput} value={user.cpass} placeholder="Re-inter Your Password"/>

</div>

<input type="submit" className="btn btn-outline-primary"  value="Register" onClick={DataSend } />


<span className="ml-5">Alredy Have an Account? </span>
<NavLink to="/login" className=" btn btn-outline-success ml-3">Login here</NavLink>


</form>


            </div>




            </div>





            </div>



        </>
    )
}

export default Register
