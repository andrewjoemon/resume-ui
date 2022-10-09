import React from 'react'
import "./temp.css";
import { Link } from 'react-router-dom';
import image from "./temp1.jpg";

function Temp() {
  return (
    <div>
    <h1 id="temph1">Select Template</h1>
    <Link className='link23' to='/Template'><img id='l56' src={image} alt='Template 1'></img></Link>
    </div>
  )
}

export default Temp