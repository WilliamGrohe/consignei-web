import type { Partner } from '@/types/partner';
import { api } from './api';

export async function getPartners() {
  const response = await api.get('/partners');
  return response.data;
}

export async function getPartner(cnpj: string) {
  const response = await api.get(`/partners/${cnpj}`);
  return response.data;
}

export async function createPartner(payload: Partner){
  const response = await api.post('/partners', payload);
  return response.data;
}