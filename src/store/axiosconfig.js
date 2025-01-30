import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true, // This allows sending cookies with requests
});

// Add a request interceptor to include the token in the headers
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
