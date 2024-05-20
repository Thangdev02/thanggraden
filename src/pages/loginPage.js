import React, { useState } from 'react';
import '../styles/loginPage.css'; 
import { useNavigate } from 'react-router-dom';
import accountData from '../services/data/auth';
import PrimarySearchAppBar from '../layouts/appBar';
import { duongdan } from '../routes';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = accountData.find((acc) => acc.username === username && acc.password === password);
    if (user) {
      if (user.role === 'user') {
        // Navigate to /home for user role
        navigate(duongdan.firstPage);
      } else if (user.role === 'admin') {
        // Navigate to /admin for admin role
        navigate(duongdan.admin);
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
        <PrimarySearchAppBar/>
    <div className="login-container">
      <div className="image-container">
        <img alt="banner" src="https://png.pngtree.com/thumb_back/fw800/background/20240227/pngtree-abstract-summer-monstera-leaf-tropical-seamless-pattern-image_15631188.jpg" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>

  );
}

export default LoginPage;
