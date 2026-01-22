import { api } from './api';

export async function getDashboardConsignments() {
  const response = await api.get('/consignments/dashboard');
  return response.data;
}