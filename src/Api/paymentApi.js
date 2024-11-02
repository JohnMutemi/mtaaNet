export const getPayments = async (clientId, token) => {
  const response = await fetch(`/api/clients/${clientId}/payments`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch payment history');
  }
  return response.json();
};
