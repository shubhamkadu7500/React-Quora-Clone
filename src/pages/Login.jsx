import React, { useState } from "react";
import "../pagecss/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform your email and password validation here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!email.match(emailRegex)) {
      alert("Invalid email format");
      return;
    }

    if (!password.match(passwordRegex)) {
      alert(
        "Password must be at least 8 characters and contain at least one letter and one number"
      );
      return;
    }

    // to check the email and password
    const isValidUser = true;
    if (isValidUser) {
      // Redirect to the Main component using Line
      navigate("/Main");
    } else {
      // Handles incorrect email or password
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="login">
          <div className="log-s">
            <div className="logo-s">
              <img src="/images/logo.png" alt="" />
            </div>

            <div className="logo-desc">
              <p>A place to share knowledge and better understand the world</p>
            </div>
          </div>

          <div className="login-auth">
            <div className="login-option1">
              <div className="login-desc">
                <p>
                  By continuing you indicate thst you agree to <br />
                  Quora <span className="term">Terms of Service</span> and{" "}
                  <span className="term">Privacy Policy</span>
                </p>
              </div>

              <div className="login-option">
                <div className="opt1">
                  <img src="/images/google-icon.svg" alt="goole-logo" />
                  <a href="Main">Conitnue with Google</a>
                </div>

                <div className="opt2">
                  <img src="/images/facebook-icon.svg" alt="" />
                  <a href="Main">Continue with Facebook</a>
                </div>

                <div className="opt3">
                  <a href="/Main">Sign up with email</a>
                </div>
              </div>
            </div>

            <div className="login-option2">
              <div className="login-sect">
                <div className="login-label">
                  <label htmlFor="login">Login</label>
                </div>

                <div className="login-input1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login-input2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="login-btn">
                  <a href="#">Forgot password?</a>
                  <button onClick={handleLogin}>Login</button>
                </div>
              </div>
            </div>
          </div>

          <div className="links">
            <a href="#">About</a>&nbsp;&middot;&nbsp;
            <a href="#">Careers</a>&nbsp;&middot;&nbsp;
            <a href="#">Privacy</a>&nbsp;&middot;&nbsp;
            <a href="#">Terms</a>&nbsp;&middot;&nbsp;
            <a href="#">Contact</a>&nbsp;&middot;&nbsp;
            <a href="#">Languages</a>&nbsp;&middot;&nbsp;
            <a href="#">Your Ad choices</a>&nbsp;&middot;&nbsp;
            <a href="#">press</a>&nbsp;&middot;&nbsp;
            <a href="#">Quora, Inc 2023</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
