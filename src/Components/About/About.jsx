import React from 'react';
import "./about.css";

export default function About(props) {

  var c=props.data.name;
  return (
    <div className="divabout">
        <h1 className="h1about">Copyright - {c}</h1>
      
             

        </div>
  )
}
