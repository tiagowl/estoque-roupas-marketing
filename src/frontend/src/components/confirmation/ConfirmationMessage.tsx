'use client';

import React from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export function ConfirmationMessage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success-100 mb-6">
          <svg
            className="w-12 h-12 text-success-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Cadastro realizado com sucesso!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Obrigado por se cadastrar! Em breve você receberá um email com instruções
          para acessar sua conta e começar a usar o sistema.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Próximos passos:
          </h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Verifique seu email para ativar sua conta</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Faça login para começar a usar o sistema</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Comece cadastrando seus produtos</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="large">
              Voltar para página inicial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

