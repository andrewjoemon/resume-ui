import React from 'react';
import { useState } from 'react';
import './template.css';

function Template({inputs}) {

   
    {   console.log('printed');
        var dob2=inputs.birth;
        var dob3=new Date(dob2);
        var date1=dob3.getDate()
        console.log(date1);
        
        if(isNaN(date1)){
            var dateofbirth=" ";
            console.log('if printed');
        }
        else{
            var dateofbirth=date1+' - '+dob3.getMonth()+1+' - '+dob3.getFullYear();
            console.log('else');
        }
        if(inputs.code==undefined){
            inputs.code="+91"
        }
        var fullcontact=""+inputs.code+inputs.contact;
        if(inputs.contact==undefined){
            fullcontact="";
        }
        
    }
   
    const[soft1,setSoft1] =useState(inputs.soft);
    const[age1,setAge1]=useState(inputs.age);
    const[primary1,setPrimary1]=useState(inputs.primary);
    const[experience1,setExperience1]=useState(inputs.experience);
    const[email1,setEmail1]=useState(inputs.email);
    const[contact1,setContact1]=useState(fullcontact);
    const[address1,setAddress1]=useState(inputs.address);
    const[name2,setName1]=useState(inputs.name1);
    const[dob1,setdob1]=useState(dateofbirth);
    const[gender1,setGender1]=useState(inputs.gender);

    const download=()=>{
        const element=document.currentElement('a');
        const file=new Blob([document.getElementById('inp1').value],{
            type:"text/plain;charset=utf-8"
        });
        element.href=URL.createObjectURL(file);
        element.download="NewDoc.txt";
        document.body.appendChild(element);
        element.click();
    }


    const print1=()=>{
        window.print();
    }
    
  
    

    return (
 
    <div>
    <div className='tempdiv'>
    <h1> Resume</h1>
    <table className="t7">
        <tr className='tr7'>
            <td className='td7'>
                <label>Name:</label>
                </td>
                <td><input id="inp1" value={name2} className="xyz1" type="text" name="name1"  disabled></input></td>
                </tr>  
                <tr className='tr7'>
            <td className='td7'>
                <label>Date of Birth:</label>
                </td>
                <td><input id="d1" value={dob1} className='xyz1' disabled type="text" name="birth1"></input></td> 
                </tr>  
                <tr className='tr7'>
            <td className='td7'>
                <label>Age:</label>
                </td>
                <td><input id='age1' value={age1} className='xyz1' disabled  type="text" ></input></td>
                </tr>  
                <tr className='tr7'>
            <td className='td7'>
                <label>Gender:</label>
                </td>
                <td><input id='gender1' value={gender1} className='xyz1' disabled  type="text" ></input></td>
                </tr>  
                <tr className='tr7'>
            <td className='td7'>
                <label>Primary Skills:</label>
                </td>
                <td><input id='primary' value={primary1} className='xyz1' disabled  type="text" ></input></td>
                </tr>   
                <tr className='tr7'>
            <td className='td7'>
                <label>Soft Skills:</label>
                </td>
                <td><input id='soft' value={soft1} className='xyz1' disabled  type="text" ></input></td>
                </tr>  
                <tr className='tr7'>
            <td className='td7'>
                <label>Experience:</label>
                </td>
                <td><input id='exp1' value={experience1} className='xyz1' disabled  type="text" ></input></td>
                </tr>  
                <tr className='tr7'>
            <td className='td7'>
                <label>Email:</label>
                </td>
                <td><input id='email1' value={email1} className='xyz1' disabled  type="text" ></input></td>
                </tr>  
                <tr className='tr7'>
            <td className='td7'>
                <label>Contact Number:</label>
                </td>
                <td><input id='number1' value={contact1} className='xyz1' disabled  type="text" ></input></td>
                </tr>  
                <tr className='tr7'>
            <td className='td7'>
                <label>Address:</label>
                </td>
                <td><textarea id='add1' value={address1} className='xyz1' disabled  type="text" ></textarea></td>
                </tr>  
           
                     
    </table>  
    
    </div>
    <button className='btn23' onClick={print1}> Download Resume</button>
    <button primary onClick={download}>Download</button>
    </div>
  )
}

export default Template
