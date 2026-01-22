import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
});

export async function getDashboardConsignments() {
  const response = await api.get('/consignments/dashboard');
  return response.data;
}