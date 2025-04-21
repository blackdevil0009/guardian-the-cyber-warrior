import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000', // Change this to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add token support for authenticated routes
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

// Helper functions (example for register & login)
export const register = (email, password) => {
  return API.post('/auth/register', { email, password });
};

export const login = (email, password) => {
  return API.post('/auth/login', { email, password });
};
