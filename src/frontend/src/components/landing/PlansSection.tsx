'use client';

import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface PlansSectionProps {
  onPlanSelect?: (plan: 'gratuito' | 'premium') => void;
}

export function PlansSection({ onPlanSelect }: PlansSectionProps) {
  const plans = [
    {
      name: 'Gratuito',
      price: 'R$ 0',
      period: '/mês',
      description: 'Perfeito para começar',
      features: [
        'Até 100 produtos',
        'Sem multi-usuário',
        'Todas as funcionalidades básicas',
        'Suporte por email',
      ],
      plan: 'gratuito' as const,
      highlighted: false,
    },
    {
      name: 'Premium',
      price: 'Sob consulta',
      period: '',
      description: 'Para lojas em crescimento',
      features: [
        'Produtos ilimitados',
        'Multi-usuário',
        'Todas as funcionalidades',
        'Suporte prioritário',
        'Relatórios avançados',
      ],
      plan: 'premium' as const,
      highlighted: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha seu Plano
          </h2>
          <p className="text-lg text-gray-600">
            Comece grátis e atualize quando precisar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${plan.highlighted ? 'border-2 border-primary-500' : ''}`}
              hover
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  size="medium"
                  className="w-full"
                  onClick={() => onPlanSelect?.(plan.plan)}
                >
                  {plan.name === 'Gratuito' ? 'Começar Grátis' : 'Assinar Premium'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

