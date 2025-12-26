import { z } from 'zod';

export const enderecoSchema = z.object({
  cep: z.string().length(8, 'CEP deve ter 8 dígitos'),
  logradouro: z.string().min(2, 'Logradouro é obrigatório'),
  bairro: z.string().min(2, 'Bairro é obrigatório'),
  cidade: z.string().min(2, 'Cidade é obrigatória'),
  estado: z.string().length(2, 'Estado deve ter 2 caracteres'),
  complemento: z.string().optional(),
});

export const signupSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  nomeLoja: z.string().min(2, 'Nome da loja é obrigatório'),
  quantidadeFuncionarios: z.number().min(1, 'Deve ter pelo menos 1 funcionário'),
  endereco: enderecoSchema,
  plano: z.enum(['gratuito', 'premium'], {
    errorMap: () => ({ message: 'Selecione um plano' }),
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;

