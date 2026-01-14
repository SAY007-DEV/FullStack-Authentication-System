import React, { useState } from "react";
import axios from 'axios'

function Login() {

const[email, setEmail]=useState("");
const[password, setPassword]=useState("");

async function handleSubmit(e){
  e.preventDefault();
 
  try {
    const response = await axios.post('http://localhost:5000/api/register', {
      email,
      password,
    });
    console.log("Success:", response.data);
   
  } catch (error) {
    
    console.error("Error:", error.response ? error.response.data : error.message);
  }
}   



  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>

        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

        <span>or use your account</span>
        <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <a href="#">Forgot your password?</a>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
