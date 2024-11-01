import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Register.css";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
    const handleClickLogin = () => {
      console.log(email);
      console.log(password);

      const islengthvalid = password.length >= 8;
      if (islengthvalid) {
        if (password === '12345678') {
          navigate('/PersonalDetails');
        }
        
      } else {
        setError('This field is required.')
      }
    }

    const handleNavClick = () => {
      navigate('/Register');
    }

    
  return (
      <div className="login-container">
      <h2>Login</h2>

      <label className="lbl-email">
        *Email
      </label>
      <br></br>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        required
      ></input>
      <br></br>
      <br></br>
      
      <label type="text" className="lbl-password">
      *Password
      </label>
      <br></br>
      <input
      value={password}
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      type="password"
      required></input>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <br></br>
      <br></br>

      <label onClick={handleNavClick} className="not-user">Not a registered user?</label>
      <br /><br />

      
      <button onClick={handleClickLogin} type="submit" id="submit">
        Login
      </button>
      

      <br></br>
    </div>
  );
};

export default Login;

