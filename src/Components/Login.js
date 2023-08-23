import profile from "../asset/image/login.png";
import Background from "../asset/image/Background.jpg";
import {useState} from 'react';
import '../asset/ideas.css';

function App() {
  const[userName,setName]= useState("")
  const[userPassword, setPassword] = useState("")

  const handleClick = ()=>{
    console.log(userName,userPassword);
    if(userName === "Shivangi" && userPassword==="1234"){
      alert("Valid");
    }
    else if(userName !== "Shivangi" && userPassword==="1234" && userName!==""){
      alert("Enter Valid Username");
    }
    else if(userName === "Shivangi" && userPassword!=="1234" &&  userPassword!==""){
      alert("Enter Valid Password");
    }else if(userName === "" && userPassword!==""){
      alert("Please Enter User Name");
    }
    else if(userName!=="" && userPassword === ""){
      alert("Please Enter Password");
    }else if(userName!=="" && userPassword!=="" && userName !== "Shivangi" && userPassword !=="1234" ){
      alert("User id and password are invalid");
    }else{
      alert("Enter both user name and password")
    }
  }
  return (
    
    <div className="main" style={{ backgroundImage:`url(${Background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }} >
    <div className="sub-main" >
    
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>

          </div>


        </div>
        <div>
          <h2 className="heading">Ideate</h2>
          <div>
            <input type="text" placeholder="User ID" className="name" value ={userName} onChange={(event)=>
            setName(event.target.value)

            }/>
          </div>
          <div className="second-input">
            <input type="password" placeholder="Password" className="name" value ={userPassword} onChange={(event)=>
            setPassword(event.target.value)

            }/>
          </div>
         <div className="login-button">
         <button onClick={handleClick} >Login</button>
         </div>
        
          

        </div>
      </div>
      

    </div>
   </div>
  );
}

export default App;