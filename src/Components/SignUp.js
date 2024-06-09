import React, { useState } from 'react';
import Background from "../asset/image/Background.jpg";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [credentials, setCredentials] = useState({ userName: "", email: "", password: "", contact:"" });
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const { userName, email, password, contact } = credentials;
    const response = await fetch("https://ideateit.onrender.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: userName, email, password , contact})
    });

    if (response.status === 400) {
      alert('User with the choosen email and username already exists');
      return; 
    }

    if (!response.ok) {
      console.error(`HTTP Error: ${response.status} - ${response.statusText}`);
      const errorResponseText = await response.text();
      console.error(errorResponseText); 
      alert("Bad Request 500")
   
      return;
    }
    

    const json = await response.json();
console.log(json); // Log the entire server response

    localStorage.setItem('token', json.authtoken);
    navigate("/login");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="main" style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="sub-main">
        <div>
          <div>
            <h2 className="heading">Create Your Account</h2>
            <div>
              <input type="text" placeholder="UserName" className="name" name="userName" value={credentials.userName} onChange={onChange} />
            </div>
            <div className="second-input">
              <input type="text" placeholder="Email Id" className="name" name="email" value={credentials.email} onChange={onChange} />
            </div>
            <div className="second-input">
              <input type="password" placeholder="Password" className="name" name="password" value={credentials.password} onChange={onChange} />
            </div>
            <div className="second-input">
              <input type="text" placeholder="Contact" className="name" name="contact" value={credentials.contact} onChange={onChange} />
            </div>
            <div>
              <button className="login-button" style={{  marginTop: "30px" }} onClick={handleClick}>SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
