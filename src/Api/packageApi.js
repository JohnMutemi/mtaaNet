export const getPackages = async (token) => {
  const response = await fetch('/api/packages', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch packages');
  }
  return response.json();
};
