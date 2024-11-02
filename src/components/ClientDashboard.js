import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getClientDetails } from '../Api/clientApi';
import './clientdashboard.css';

const ClientDashboard = () => {
  const { user, token } = useContext(UserContext);
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    if (token && user) {
      getClientDetails(user.id, token)
        .then((data) => setClientData(data))
        .catch((error) =>
          console.error('Error fetching client details:', error)
        );
    }
  }, [token, user]);

  if (!user) {
    return (
      <p className="error-message">Please log in to view your dashboard</p>
    );
  }

  return (
    <div className="client-dashboard">
      <h1 className="welcome-message">Welcome, {user.name}</h1>
      {clientData ? (
        <div className="client-info">
          <p>
            <strong>Package:</strong> {clientData.package.name}
          </p>
          <p>
            <strong>Bandwidth:</strong> {clientData.package.bandwidth} Mbps
          </p>
        </div>
      ) : (
        <p className="loading-message">Loading client details...</p>
      )}
    </div>
  );
};

export default ClientDashboard;
