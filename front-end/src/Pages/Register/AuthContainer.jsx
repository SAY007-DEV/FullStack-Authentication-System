import React, { useState } from "react";

import "./Style.css";
import Register from "./Register";
import Login from "./Login";

function AuthContainer() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className={`container ${isSignUp ? "right-panel-active" : ""}`}
    >
      <Register/>
      <Login/>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login</p>
            <button
              className="ghost"
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start journey</p>
            <button
              className="ghost"
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthContainer;
