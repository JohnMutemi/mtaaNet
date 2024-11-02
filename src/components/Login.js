import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { UserContext } from '../context/UserContext'; // Import UserContext

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useContext(UserContext); // Accessing handleLogin from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation check
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    // Prepare the request data
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await fetch('http://127.0.0.1:5555/login', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Login failed');
      }

      const userData = await response.json();
      console.log('User data received:', userData); // Debugging statement

      // Use handleLogin from context
      await handleLogin({
        username: userData.username,
        userId: userData.user_id,
        email: userData.email,
        role: userData.role, // Admin or Client role
        token: userData.access_token,
      });

      setError('');
      setSuccess('Login successful!');

      // Redirect based on user role
      if (userData.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/client-dashboard');
      }
    } catch (error) {
      console.log('Login error:', error.message); // Debugging statement
      setError(error.message);
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Login</h3>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <div className="extra-links">
          <p>
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
