'use client';

import React from 'react';

interface PlanSelectorProps {
  value: 'gratuito' | 'premium' | '';
  onChange: (plan: 'gratuito' | 'premium') => void;
  error?: string;
}

export function PlanSelector({ value, onChange, error }: PlanSelectorProps) {
  const plans = [
    {
      id: 'gratuito',
      name: 'Gratuito',
      description: 'Até 100 produtos, sem multi-usuário',
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Produtos ilimitados, multi-usuário',
    },
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Plano <span className="text-error-500">*</span>
      </label>
      <div className="space-y-3">
        {plans.map((plan) => (
          <label
            key={plan.id}
            className={`
              flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all
              ${
                value === plan.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }
            `}
          >
            <input
              type="radio"
              name="plano"
              value={plan.id}
              checked={value === plan.id}
              onChange={() => onChange(plan.id as 'gratuito' | 'premium')}
              className="mt-1 mr-3 w-4 h-4 text-primary-500 focus:ring-primary-500"
            />
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{plan.name}</div>
              <div className="text-sm text-gray-600">{plan.description}</div>
            </div>
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-error-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

