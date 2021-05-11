import React,{useState,useEffect,useContext} from 'react'
import { UserContext } from '../App'

function Home() {
const {state,dispatch} = useContext(UserContext)
const [name,setName]=useState("monirul")
const fetchApi=async()=>{
try {
    const res= await fetch ("/getdata",{method:"GET",headers:{
       "Content-Type" :"application/json"
    }})

const info=await res.json()

setName(state)
} catch (error) {
    console.log("Data not found"+error)
}
}

useEffect(()=>{
    fetchApi()
},[])
    return (
        <>
           <h1 className="text-uppercase text-center mt-5" >welcome  {name} </h1> 


        </>
    )
}

export default Home
