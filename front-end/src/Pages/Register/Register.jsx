import React from "react";
import { useState } from "react";
import axios from "axios";

function Register() {
 const[name, setName]=useState("");
const[email, setEmail]=useState("");
const[password, setPassword]=useState("");

async function handleSubmit(e){
  e.preventDefault();
  // console.log(name, email, password);
  try {
    const response = await axios.post('http://localhost:5000/api/v1/auth/register', {
      name,
      email,
      password,
    });
    console.log("Success:", response.data);
   
  } catch (error) {
    
    console.error("Error:", error.response ? error.response.data : error.message);
  }
}
  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>

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

        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
       
        <button >Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
