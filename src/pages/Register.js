import React, { useState } from "react";
import "../Styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !email || !phone || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5066/register', {
        username,
        email,
        phone,
        password,
      });
      if (response.data === 'User registered successfully') {
        setShowSuccess(true);
        setError(""); // Clear any previous errors
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/Login');
        }, 2000);
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      setError('An error occurred during registration');
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <div className="register-child" />
        <div className="frame-div">
          <div className="vector">
            <img className="vector-icon1" alt="" src="/vector1.svg" />
          </div>
          <input
            type="text"
            className="nomor-telepon"
            placeholder="Nomor telepon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="vector-parent3">
          <div className="vector1">
            <img className="vector-icon2" alt="" src="/vector2.svg" />
          </div>
          <input
            type="text"
            className="nomor-telepon"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user-round-group">
          <img className="user-round-icon1" alt="" src="/user-round.svg" />
          <input
            type="text"
            className="nomor-telepon"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="instance-container">
          <div className="vector-frame">
            <img className="vector-icon3" alt="" src="/vector.svg" />
          </div>
          <input
            type="password"
            className="nomor-telepon"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register-wrapper">
          <button type="submit" className="register1">Register</button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
      {showSuccess && (
        <div className="success-popup">
          <p>Registrasi Success 👋😉</p>
        </div>
      )}
      <div className="register2">Register</div>
      <div className="have-an-account-container">
        <span>{`Have an account yet? `}</span>
        <Link to="/Login">
          <b>Login now</b>
        </Link>
      </div>
      <div className="kembang-ayu-wrapper1">
        <b className="kembang-ayu7">Kembang Ayu</b>
      </div>
    </div>
  );
};

export default Register;
