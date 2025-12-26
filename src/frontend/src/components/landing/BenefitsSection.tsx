import React from 'react';
import { Card } from '../ui/Card';

export function BenefitsSection() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Economia de Tempo',
      description: 'Automatize processos e foque no que realmente importa: suas vendas',
    },
    {
      icon: '📈',
      title: 'Aumento de Vendas',
      description: 'Identifique produtos parados e crie estratégias para vendê-los',
    },
    {
      icon: '💰',
      title: 'Redução de Perdas',
      description: 'Controle total do estoque evita perdas por falta de organização',
    },
    {
      icon: '🎯',
      title: 'Controle Total',
      description: 'Tenha visibilidade completa do seu inventário em tempo real',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nosso sistema?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Benefícios reais para o seu negócio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} hover>
              <div className="flex items-start">
                <div className="text-4xl mr-4">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

