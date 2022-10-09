import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

function Nav({Reset}){ 
    const Load=()=>{
        Reset();
    }
   
    return(
       
        
        <header className="t46" >
            <Link to="/" id="t47">Home</Link>
            <Link to="/Temp"  onClick={Load} id="t47">Templates</Link>
            <Link to="/About" id="t47">About</Link>
            
            
        </header>
     
           
     
    )
};
export default Nav
