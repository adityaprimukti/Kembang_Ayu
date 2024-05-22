import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // State to manage success message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!username || !password) {
      setError("Silahkan isi pada kolom");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3008/login', {
        username,
        password,
      });
      if (response.data === 'Login successful') {
        // Show success message for 5 seconds
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/Home'); // Redirect to home page or any other page after successful login
        }, 5000);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Username atau Password salah, Silahkan periksa kembali');
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div className="login-child" />
        <div className="user-round-parent">
          <img className="user-round-icon" alt="" src="/user-round.svg" />
          <input
            className="username-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="instance-group">
          <div className="vector-wrapper">
            <img className="vector-icon" alt="" src="/vector.svg" />
          </div>
          <input
            className="password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-wrapper">
        <Link to="/AfterHome">
          <button type="submit" className="login1">Login</button>
          </Link>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
      {showSuccess && (
        <div className="success-popup">
          <p>Login Berhasil</p>
        </div>
      )}
      <div className="login2">Login</div>
      <div className="dont-have-an-container">
        <span>{`Don't have an account yet? `}</span>
        <Link to="/Register">
          <div className="create-account-link"><b>Create an account</b></div>
        </Link>
      </div>
      <div className="kembang-ayu-frame">
        <b className="kembang-ayu6">Kembang Ayu</b>
      </div>
    </div>
  );
};

export default Login;
