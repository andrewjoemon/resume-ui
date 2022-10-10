import React from "react";
import './navbar.css';
import { HashRouter, Link } from "react-router-dom";

function Nav({Reset}){ 
    const Load=()=>{
        Reset();
    }
   
    return(
       
        
        <header className="t46" >
            <HashRouter basename={process.env.PUBLIC_URL}>

            <Link to="/resume-ui" id="t47">Home</Link>
            <Link to="/resume-ui/Temp"  onClick={Load} id="t47">Templates</Link>
            <Link to="/resume-ui/About" id="t47">About</Link>
            </HashRouter>
            
            
        </header>
     
           
     
    )
};
export default Nav
