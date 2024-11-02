export const getClientDetails = async (clientId, token) => {
    const response = await fetch(`/api/clients/${clientId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch client details');
    }
    return response.json();
};
