'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, type SignupFormData } from '@/lib/validation/schema';
import { createSignup } from '@/lib/api/strapi';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { CEPInput } from './CEPInput';
import { PlanSelector } from './PlanSelector';
import type { Endereco } from '@/types';

interface SignupFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  defaultPlan?: 'gratuito' | 'premium' | null;
}

export function SignupForm({ onSuccess, onError, defaultPlan }: SignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      plano: defaultPlan || 'gratuito',
      endereco: {
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
        complemento: '',
      },
    },
    mode: 'onBlur',
  });

  // Atualizar plano se defaultPlan mudar
  useEffect(() => {
    if (defaultPlan) {
      setValue('plano', defaultPlan);
    }
  }, [defaultPlan, setValue]);

  const cepValue = watch('endereco.cep');
  const enderecoValue = watch('endereco');

  const handleAddressChange = (address: Partial<Endereco>) => {
    if (address.cep) setValue('endereco.cep', address.cep);
    if (address.logradouro) setValue('endereco.logradouro', address.logradouro);
    if (address.bairro) setValue('endereco.bairro', address.bairro);
    if (address.cidade) setValue('endereco.cidade', address.cidade);
    if (address.estado) setValue('endereco.estado', address.estado);
    if (address.complemento !== undefined) {
      setValue('endereco.complemento', address.complemento || '');
    }
    // Trigger validation after setting values
    trigger('endereco');
  };

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await createSignup(data);
      onSuccess?.();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Erro ao enviar formulário. Tente novamente.';
      setSubmitError(errorMessage);
      onError?.(error instanceof Error ? error : new Error(errorMessage));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div
          className="p-4 bg-error-50 border border-error-200 rounded-lg text-error-700"
          role="alert"
        >
          {submitError}
        </div>
      )}

      <Input
        label="Nome"
        {...register('nome')}
        error={errors.nome?.message}
        placeholder="Seu nome completo"
        required
      />

      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        placeholder="seu@email.com"
        required
      />

      <Input
        label="Nome da Loja"
        {...register('nomeLoja')}
        error={errors.nomeLoja?.message}
        placeholder="Nome da sua loja"
        required
      />

      <Input
        label="Quantos Funcionários"
        type="number"
        {...register('quantidadeFuncionarios', { valueAsNumber: true })}
        error={errors.quantidadeFuncionarios?.message}
        placeholder="Ex: 3"
        min={1}
        required
        helperText="Quantos funcionários trabalham na sua loja?"
      />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Endereço</h3>

        <CEPInput
          value={cepValue}
          onChange={(value) => setValue('endereco.cep', value)}
          onAddressChange={handleAddressChange}
          error={errors.endereco?.cep?.message}
          disabled={isSubmitting}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Logradouro"
            {...register('endereco.logradouro')}
            error={errors.endereco?.logradouro?.message}
            placeholder="Rua, Avenida, etc."
            required
          />

          <Input
            label="Bairro"
            {...register('endereco.bairro')}
            error={errors.endereco?.bairro?.message}
            placeholder="Nome do bairro"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Cidade"
            {...register('endereco.cidade')}
            error={errors.endereco?.cidade?.message}
            placeholder="Nome da cidade"
            required
          />

          <Input
            label="Estado"
            {...register('endereco.estado')}
            error={errors.endereco?.estado?.message}
            placeholder="SP"
            maxLength={2}
            required
            helperText="Sigla do estado (2 letras)"
          />
        </div>

        <Input
          label="Complemento"
          {...register('endereco.complemento')}
          error={errors.endereco?.complemento?.message}
          placeholder="Apto, Sala, etc. (opcional)"
        />
      </div>

      <PlanSelector
        value={watch('plano')}
        onChange={(plan) => setValue('plano', plan)}
        error={errors.plano?.message}
      />

      <Button
        type="submit"
        variant="primary"
        size="large"
        isLoading={isSubmitting}
        className="w-full"
      >
        Enviar Cadastro
      </Button>
    </form>
  );
}

