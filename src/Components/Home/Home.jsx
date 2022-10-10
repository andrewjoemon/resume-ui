import React from "react";
import './Home.css';
import {Link} from "react-router-dom";

function Home({Reset}){
   
    return(
        <div className="r4">
        <h1 className="hclass">WELCOME TO MY PAGE</h1>
        <h1><Link to='/resume-ui/Form' onFocus={Reset} id="centerbtn">Create New Resume</Link></h1>
        </div>
    );
    }
export default Home;