import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import profile from "../asset/image/login.png";
import Background from "../asset/image/Background.jpg";
import '../asset/ideas.css';

function App() {
  const [credentials , setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://ideateit.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
  
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      localStorage.setItem('token', json.authtoken);
      navigate('/MyProfile');
    } else {
      toast.error('Wrong credentials');
    } 
  }; 
  

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="main" style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h2 className="heading">Ideate</h2>
            <div>
              <input type="email" placeholder="Email" className="name" name="email" value={credentials.email} onChange={onChange}/>
            </div>
            <div className="second-input">
              <input type="password" placeholder="Password" className="name" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div >
              <button className="login-button" onClick={handleSubmit}>Login</button>
            </div>
            <div className="signup-link">
              <p style={{color:"#87a7b1"}}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" style ={{color: "black"}}autoClose={3000} />
    </div>
  );
}

export default App;
