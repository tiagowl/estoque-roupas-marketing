import axios from 'axios';
import type { SignupData, StrapiResponse, StrapiError } from '@/types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error('NEXT_PUBLIC_STRAPI_URL is not defined');
}

const api = axios.create({
  baseURL: STRAPI_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function createSignup(
  data: SignupData
): Promise<StrapiResponse<{ id: number; attributes: SignupData & { createdAt: string; updatedAt: string } }>> {
  try {
    const response = await api.post<StrapiResponse<{ id: number; attributes: SignupData & { createdAt: string; updatedAt: string } }>>(
      '/api/signups',
      { data }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const strapiError = error.response.data as StrapiError;
        throw new Error(strapiError.error?.message || 'Erro ao criar cadastro');
      }
      if (error.request) {
        throw new Error('Erro de conexão. Verifique sua internet e tente novamente.');
      }
    }
    throw new Error('Erro desconhecido. Tente novamente.');
  }
}

