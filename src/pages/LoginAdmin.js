import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginAdmin.css';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State untuk menampilkan popup
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple authentication logic, replace with appropriate authentication logic
    if (username === 'admin' && password === '123') {
      // Authentication successful, show popup and then redirect
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/admindashboard');
      }, 2000); // 2 seconds
    } else {
      alert('Username or password is incorrect');
    }
  };

  useEffect(() => {
    // Cleanup function to hide popup if user navigates away
    return () => {
      setShowPopup(false);
    };
  }, []);

  return (
    <div className="admin-login-container">
      <div className="admin-login">
        <b className="logo-kembangayu">Kembang Ayu</b>
        <div className="Admin">Admin</div>
        <h2></h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <img className="user-round-icon" alt="" src="/user-round.svg" />
              <p className="username-admin-login">Username:</p>
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-admin-login">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <p className="password-admin-login">Password:</p>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button-admin">Login</button>
          </div>
        </form>
      </div>
      {/* Popup for successful login */}
      {showPopup && (
        <div className="popup-admin">
          <p>Hi Admin</p>
        </div>
      )}
    </div>
  );
};

export default LoginAdmin;
