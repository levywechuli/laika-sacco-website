const API_BASE_URL = 'http://localhost:5000/api';

// Get auth token from localStorage
const getAuthToken = () => localStorage.getItem('token');

// API call helper
const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Request failed');
  }

  return response.json();
};

// Auth API
export const authAPI = {
  login: (memberNumber: string, password: string) =>
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ membershipNumber: memberNumber, password }),
    }),
  
  register: (data: { memberNumber: string; password: string; name: string; email: string; phone: string }) =>
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  getProfile: () => apiCall('/auth/profile'),
  
  updateProfile: (data: any) =>
    apiCall('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

// Admin API (endpoints you need to create on your backend)
export const adminAPI = {
  getAllMembers: () => apiCall('/admin/members'),
  
  getMember: (id: string) => apiCall(`/admin/members/${id}`),
  
  createMember: (data: any) =>
    apiCall('/admin/members', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  updateMember: (id: string, data: any) =>
    apiCall(`/admin/members/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  deleteMember: (id: string) =>
    apiCall(`/admin/members/${id}`, {
      method: 'DELETE',
    }),
  
  adjustBalance: (memberId: string, productType: string, amount: number, reason: string) =>
    apiCall('/admin/adjust-balance', {
      method: 'POST',
      body: JSON.stringify({ memberId, productType, amount, reason }),
    }),
};
