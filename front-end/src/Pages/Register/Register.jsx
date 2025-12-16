import React from "react";
import { useState } from "react";

function Register() {
 const[name, setName]=useState("");
const[email, setEmail]=useState("");
const[password, setPassword]=useState("");

  return (
    <div className="form-container sign-up-container">
      <form>
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
