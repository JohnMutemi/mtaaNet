import React, { useState } from 'react';
import './forgotpassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setError('Email is required');
      return;
    }

    // Submit email for password reset
    fetch('http://127.0.0.1:5555/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.error || 'Password reset failed');
          });
        }
        return response.json();
      })
      .then((data) => {
        setSuccess('Password reset email sent!');
        setError('');
      })
      .catch((error) => {
        setError(error.message);
        setSuccess('');
      });
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h3>Forgot Password</h3>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="reset-button">
          Send Reset Email
        </button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
