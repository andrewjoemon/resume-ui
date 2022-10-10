import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function Nav({Reset}){ 
    const Load=()=>{
        Reset();
    }
   
    return(
       
        
        <header className="t46" >
            <BrowserRouter basename={process.env.PUBLIC_URL}>

            <Link to="/resume-ui" id="t47">Home</Link>
            <Link to="/resume-ui/Temp"  onClick={Load} id="t47">Templates</Link>
            <Link to="/resume-ui/About" id="t47">About</Link>
            </BrowserRouter>
            
            
        </header>
     
           
     
    )
};
export default Nav
