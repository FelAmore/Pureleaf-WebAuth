import React, { useState, useEffect, useRef } from 'react';
import '../styles/style.css';
import { FcGoogle } from 'react-icons/fc';
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import logo from '/src/images/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const imageContainerRef = useRef(null);

  const handleChange = (event) => {
    const inputEmail = event.target.value;
    const atIndex = inputEmail.indexOf('@');
    const maskedEmail = atIndex > 0 ? inputEmail.substring(0, atIndex).replace(/./g, '*') + inputEmail.substring(atIndex) : inputEmail;
    setEmail(maskedEmail);
  };


  useEffect(() => {
    if (imageContainerRef.current) {
      const divWidth = imageContainerRef.current.clientWidth;
      document.documentElement.style.setProperty('--div-width', `${divWidth}px`);
    }
  }, []);

  return (
    <div className="flex-container">
      <div className="image-container" ref={imageContainerRef}>
        <div className="background-image"></div>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="main-content">
        <h1 className="login-title">WELCOME</h1>
        <p className="subtitle-login">Sign into your account</p>

        <p className="name-login">NAME</p>
        <input type="text" className="name_text-field" placeholder="Enter your full name"/>

        <p className="user-label">E-MAIL</p>
        <input
          type="text"
          className="user_text-field"
          placeholder="Enter e-mail account"
          value={email}
          onChange={handleChange}
        />

        <p className="pass-label">PASSWORD</p>
        <input type="password" className="pass_text-field" placeholder="Enter password"/>

        <button className="login-button">LOGIN</button>

        <div className="alternative-login">
          <div className="line"></div>
          <p className="separator-text">or log in with</p>
          <div className="line"></div>
        </div>

        <div className="button-container">
          <button className="icon-button"><FcGoogle size={24} /></button>
          <button className="icon-button"><PiMicrosoftOutlookLogoFill size={30} style={{ color: '#0078d4' }} /></button>
        </div>

        <p className="forgotpass-label"><Link to="/forgotpass" style={{ color: '#FAF9EB', textDecoration: 'none' }}>Forgot your password?</Link></p>
        <p className="signup-label"><Link to="/register" style={{ color: '#FAF9EB', textDecoration: 'none' }}>Don't have an account? <span style={{ borderBottom: '1px solid #FAF9EB' }}>Sign up</span></Link></p>
      </div>
    </div>
  );
};

export default Login;

