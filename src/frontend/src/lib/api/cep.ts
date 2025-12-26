import axios from 'axios';
import type { CEPResponse } from '@/types';

const CEP_API_URL = process.env.NEXT_PUBLIC_CEP_API_URL || 'https://viacep.com.br/ws';

export async function fetchCEP(cep: string): Promise<CEPResponse> {
  // Remove caracteres não numéricos
  const cleanCEP = cep.replace(/\D/g, '');

  if (cleanCEP.length !== 8) {
    throw new Error('CEP deve ter 8 dígitos');
  }

  try {
    const response = await axios.get<CEPResponse>(
      `${CEP_API_URL}/${cleanCEP}/json/`,
      {
        timeout: 10000, // 10 segundos
      }
    );

    if (response.data.erro) {
      throw new Error('CEP não encontrado');
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Tempo de resposta excedido. Tente novamente.');
      }
      if (error.response?.status === 400) {
        throw new Error('CEP inválido');
      }
      throw new Error('Não foi possível buscar o CEP. Tente novamente.');
    }
    throw error;
  }
}

