import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/server/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

    return (
        <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input 
          className="registerInput" 
          onChange={(e) => setUsername(e.target.value)} 
          type="text" 
          placeholder="Enter your username..." />
          <label>Email</label>
          <input 
          className="registerInput" 
          onChange={(e) => setEmail(e.target.value)}
           type="text" 
           placeholder="Enter your email..." />
          <label>Password</label>
          <input 
          className="registerInput" 
          type="password" 
          placeholder="Enter your password..." 
          onChange={(e) => setPassword(e.target.value)} 
          />
          <button className="registerButton">Register</button>
        </form>
          <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
          </button>
          {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
      </div>
    );
};

export default Register;