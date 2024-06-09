import React from 'react';
import Background from "../asset/image/Background.jpg";
import {useState} from 'react';
import "../asset/contact.css";



export default function Contact() {
    const[Name,setName]= useState("")
  const[number, setnum] = useState("")

  const handleClick = ()=>{
    console.log(Name,number);
    if(Name === "" && number ===""){
      alert("Please enter your name and contact no.")
    }
    if(Name ==="" && number !==""){
      alert(" Please Enter your name")
    }
    if(Name !=="" && number ===""){
      alert(" Please Enter your contact no.")
    }
    if(Name !=="" && number !==""){
      alert("Your request has been sent")
    }

  }
  return (
    <div className="mains" style={{ 
    backgroundImage:`url(${Background})`,
    backgroundRepeat:"no-repeat"}} >
      <p  className='contact-content'>For any queries Mail to: ideateindia@id.ac.in<br/><br/>In case you want to talk to our representatives over a phone call please fill the form and we will contact you as soon as possible</p>
    <div className="sub-mains">

      <div className='box'>
          <h2 className="headings" style={{textAlign:'center'}}>Contact Form</h2>
          <div>
            <input type="text" placeholder="Name" className="names" value ={Name} onChange={(event)=>
            setName(event.target.value)

            }/>
          </div>
          <div className="second-inputs">
            <input type="text" placeholder="Contact No" className="names" value ={number} onChange={(event)=>
            setnum(event.target.value)

            }/>
          </div>
         <div >
         <button className="contact-button" onClick={handleClick} >Request Call</button>
         </div>
        
          

        </div>
     
      

    </div>
   </div>
  )
}

