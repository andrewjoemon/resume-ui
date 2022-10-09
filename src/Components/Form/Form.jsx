import React from "react";
import './form.css';
import {useState} from "react";
import { useNavigate} from "react-router-dom";


function Form({inputs,setInput,Reset}){

    

    const navigate=useNavigate();

    
    

    
    

    
    const Submit=(e)=>{e.preventDefault();
        alert(`details submitted for ${inputs.name1}`);
        
        navigate("/Template");  
               
           
                
    }

   
  

    
    const Txtenter=()=>{
        var today=new Date();
        var dob1=document.getElementById("d");
        var dob=dob1.value;
        var dob2=new Date(dob)
        var age=today.getFullYear()-dob2.getFullYear();
        var m=today.getMonth()-dob2.getMonth();
        if(m<0 || (m=0 && today.getDate()<dob2.getDate()))
        age--; 
        setInput(values=>({...values,"birth":dob,"age":age}))       
        
        
    }
    //const [inputs,setInput]=useState({});
    
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        
        setInput(values=>({...values,[name]:value}))

       
    }
    const contactLength=()=>{
        var phone=document.getElementById("cd").value;
        if(phone.length!=10){
            alert('enter valid number');
        }
    }
    
    
    return(
        <form onSubmit={Submit}>
        <table id="t1">
        <tr id='rd'><h1> RESUME DETAILS</h1></tr>
        </table>
        <table id="t2">
        <tr id="basic"><td>
        <label>Name: </label></td>
            <td><input required id="inp" className="xyz" type="text" name="name1" value={inputs.name1 || ""} onChange={handleChange}></input></td>          
        </tr>
        <tr id="basic"><td>
        <label>Date of Birth: </label></td>
            <td><input required id="d" type="date" name="birth" value={inputs.birth || ""} onChange={handleChange} onBlur={Txtenter}></input></td>          
        </tr>
        <tr id="basic"><td>
       
        <label>Age: </label></td>
            <td><input id='age' name="age" value={inputs.age || ""} onChange={handleChange} type="text" disabled>
                </input></td>          
        </tr>
        <tr id="basic"><td>
        <label>Gender: </label></td>
           <ul id="u1"> 
            <li id="l1"><label><input required name="gender" value="male" onChange={handleChange}  type="radio"></input>Male</label></li>
            <li id="l1"><label><input name="gender" value="female" onChange={handleChange}  type="radio"></input>Female</label></li>
           </ul>          
        </tr>
        <tr id="basic"><td>
        <label>Primary Skills: </label></td>
           <td><input name="primary" value={inputs.primary || ""} onChange={handleChange} list="pskills" multiple>           
            
                {/*<datalist id="pskills">
                    <option value>C</option>>
                    <option>C++</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>JavaScript</option>
                    {/*<option value="PHP"/>
                    <option value="SQL"/>
                    <option value="React"/>
                    <option value="Windows"/>
                    <option value="HTML"/>
                    <option value="CSS"/>
    <option value="Machine Learning"/>
    </datalist> */}</input> </td>         
    </tr> 
    <tr id="basic"><td> 
        <label>Soft Skills: </label></td>
            <td><input name="soft" value={inputs.soft || ""} onChange={handleChange} type="text"></input></td>          
        </tr>
        <tr id="basic"><td> 
        <label>Experience: </label></td>
            <td><input required name="experience" value={inputs.experience || ""} onChange={handleChange} type="text"></input></td>          
        </tr>        
        <tr id="basic"><td>            
        <label>Email: </label></td>
            <td><input required name="email" value={inputs.email || ""} onChange={handleChange} type="email"></input></td>          
        </tr>
        <tr id="basic"><td>
        <label>Contact number: </label></td>
            <td ><select value={inputs.code || "+91"} name="code" onChange={handleChange}>
                
                <option value="+91">India</option>
                <option value="+966">Saudi Arabia</option>
                </select><input required id="cd" name="contact" value={inputs.contact || ""} onChange={handleChange} onBlur={contactLength} type="number" ></input></td>          
        </tr>
        <tr id="basic"><td><label>Address:</label></td>
        <td ><textarea required name="address" value={inputs.address || ""} onChange={handleChange}></textarea></td></tr>
        
        <input type="submit" value="Submit Details"/>
        <button onClick={Reset}>Reset</button>
       
        </table>
        </form>
        
    );
}
export default Form;

