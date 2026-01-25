import { api } from './api';

export async function getPartners() {
  const response = await api.get('/partners');
  return response.data;
}

export async function createPartner(payload: { name: string; email: string; phone: string; }) {
  const response = await api.post('/partners', payload);
  return response.data;
}