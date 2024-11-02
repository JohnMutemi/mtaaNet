import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admindashboard.css'; 

function AdminDashboard() {
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (!token) {
      // If no token, redirect to login page
      navigate('/login');
      return;
    }

    fetch('http://127.0.0.1:5555/admin-data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAdminData(data);
      })
      .catch((error) => {
        console.error('Error fetching admin data:', error);
        navigate('/login');
      });
  }, [navigate]);

  if (!adminData) {
    return <p>Loading admin data...</p>;
  }

  return (
    <div className="admin-dashboard-container">
      <h2>Welcome, {adminData.username}!</h2>
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{adminData.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p>${adminData.totalRevenue}</p>
        </div>
        <div className="stat-card">
          <h3>Active Subscriptions</h3>
          <p>{adminData.activeSubscriptions}</p>
        </div>
      </div>
      <div className="admin-actions">
        <button onClick={() => navigate('/manage-users')}>Manage Users</button>
        <button onClick={() => navigate('/view-reports')}>View Reports</button>
        <button onClick={() => navigate('/admin-settings')}>
          Admin Settings
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
