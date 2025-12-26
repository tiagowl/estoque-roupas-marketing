export interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
  complemento?: string;
}

export interface SignupData {
  nome: string;
  email: string;
  nomeLoja: string;
  quantidadeFuncionarios: number;
  endereco: Endereco;
  plano: 'gratuito' | 'premium';
}

export interface CEPResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  erro?: boolean;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiError {
  error: {
    status: number;
    message: string;
    details?: unknown;
  };
}

