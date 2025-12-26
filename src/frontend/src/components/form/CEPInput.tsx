'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '../ui/Input';
import { fetchCEP } from '@/lib/api/cep';
import { formatCEP, isValidCEP } from '@/lib/utils/helpers';
import type { Endereco } from '@/types';

interface CEPInputProps {
  value: string;
  onChange: (value: string) => void;
  onAddressChange: (address: Partial<Endereco>) => void;
  error?: string;
  disabled?: boolean;
}

export function CEPInput({
  value,
  onChange,
  onAddressChange,
  error,
  disabled,
}: CEPInputProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [cepError, setCepError] = useState<string | null>(null);

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatCEP(rawValue);
    onChange(formatted);
    setCepError(null);
  };

  const searchCEP = async (cep: string) => {
    if (!isValidCEP(cep)) {
      return;
    }

    setIsLoading(true);
    setCepError(null);

    try {
      const data = await fetchCEP(cep);
      onAddressChange({
        cep: data.cep.replace(/\D/g, ''),
        logradouro: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'CEP não encontrado. Preencha manualmente.';
      setCepError(errorMessage);
      // Não bloqueia o formulário, apenas avisa
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlur = () => {
    if (isValidCEP(value)) {
      searchCEP(value);
    }
  };

  useEffect(() => {
    // Busca automática ao digitar 8 dígitos
    if (isValidCEP(value) && value.length === 8 && !isLoading) {
      searchCEP(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div>
      <Input
        label="CEP"
        value={value}
        onChange={handleCEPChange}
        onBlur={handleBlur}
        placeholder="00000000"
        maxLength={8}
        error={error || cepError || undefined}
        disabled={disabled || isLoading}
        required
        helperText={
          isLoading
            ? 'Buscando endereço...'
            : 'Digite o CEP para preencher automaticamente'
        }
      />
    </div>
  );
}

