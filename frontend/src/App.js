import logo from './logo.svg';
import './App.css';
import {  Route ,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './componant/Navbar'
import Home from "./componant/Home"
import Register from "./componant/Register"
import About from "./componant/About"
import Contact from "./componant/Contact"
import Login from "./componant/Login"
import Error from "./componant/Error"
import Logout from './componant/Logout';
import react,{ createContext ,useReducer} from 'react';
import{initialState,reducer} from "../src/reducer/Usereducer"



export const Routing=()=>{

  return(<>
<Switch>
 
 <Route exact  path="/" component={Home}/>
 <Route  path="/about" component={About}/>
 <Route path="/contact" component={Contact}/>
 <Route  path="/login"><Login/></Route>
 <Route  path="/register"><Register/></Route>
 <Route path="/logout" ><Logout/></Route>
 <Route  component={Error}></Route>
 </Switch>

  </>)
}
export const UserContext=createContext()

function App() { 
const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
     <Navbar></Navbar>
   <Routing/>
   </UserContext.Provider>
    </>
  )
    
}

export default App;
