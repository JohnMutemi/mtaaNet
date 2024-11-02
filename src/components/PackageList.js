import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getPackages } from '../api/packageApi';
import './PackageList.css';

const PackageList = () => {
  const { token } = useContext(UserContext);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    if (token) {
      getPackages(token)
        .then((data) => setPackages(data))
        .catch((error) => console.error('Error fetching packages:', error));
    }
  }, [token]);

  return (
    <div className="package-list">
      <h1 className="title">Available Packages</h1>
      <ul className="package-items">
        {packages.map((pkg) => (
          <li key={pkg.id} className="package-item">
            {pkg.name} - {pkg.bandwidth} Mbps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageList;
