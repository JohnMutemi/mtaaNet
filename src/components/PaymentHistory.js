import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getPayments } from '../api/paymentApi';
import './PaymentHistory.css';

const PaymentHistory = () => {
  const { user, token } = useContext(UserContext);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (token && user) {
      getPayments(user.id, token)
        .then((data) => setPayments(data))
        .catch((error) => console.error('Error fetching payments:', error));
    }
  }, [token, user]);

  return (
    <div className="payment-history">
      <h1 className="title">Payment History</h1>
      {payments.length > 0 ? (
        <ul className="payment-items">
          {payments.map((payment) => (
            <li key={payment.id} className="payment-item">
              <strong>Amount:</strong> {payment.amount} | <strong>Date:</strong>{' '}
              {new Date(payment.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading-message">No payment history found.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
