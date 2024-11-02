// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { login, register } from '../Api/authApi';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);

  // Login Function
  const handleLogin = async (credentials) => {
    try {
      const data = await login(credentials);
      setToken(data.token);
      localStorage.setItem('authToken', data.token);
      // Fetch user data and set user (e.g., user profile)
      setUser(data.user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Register Function
  const handleRegister = async (userData) => {
    try {
      const data = await register(userData);
      setToken(data.token);
      localStorage.setItem('authToken', data.token);
      setUser(data.user);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  // Logout Function
  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
  };

  // Fetch user data from token (if token exists)
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          // Add logic here to fetch user data using the token
          // Example: const userData = await getUserData(token);
          // setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    fetchUserData();
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, token, handleLogin, handleRegister, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
