import React from 'react';
import Background from "../asset/image/Background.jpg";
import {useState} from 'react';
import "../asset/contact.css";

export default function Contact() {
    const[Name,setName]= useState("")
  const[email, setEmail] = useState("")

  const handleClick = ()=>{
    console.log(Name,email);
    if(Name === "" && email ===""){
      alert("Please enter your name and email")
    }
    if(Name ==="" && email !==""){
      alert(" Please Enter your name")
    }
    if(Name !=="" && email ===""){
      alert(" Please Enter your email")
    }
    if(Name !=="" && email !==""){
      alert("Your request has been sent")
    }

  }
  return (
    <div className="mains" style={{ 
    backgroundImage:`url(${Background})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
   height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} >
    <div className="sub-mains">

      <div className='box'>
          <h2 className="headings" style={{textAlign:'center'}}>Contact Form</h2>
          <div>
            <input type="text" placeholder="Name" className="names" value ={Name} onChange={(event)=>
            setName(event.target.value)

            }/>
          </div>
          <div className="second-inputs">
            <input type="email" placeholder="Email" className="names" value ={email} onChange={(event)=>
            setEmail(event.target.value)

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

