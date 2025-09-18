import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const sendContact = (payload) => {
  return axios.post(`${API_BASE}/api/contact`, payload);
};
