import React from 'react';
import { Card } from '../ui/Card';

export function ProblemsSection() {
  const problems = [
    {
      icon: '📦',
      title: 'Estoque Desorganizado',
      description: 'Dificuldade em controlar quantidade de produtos por tamanho e cor',
    },
    {
      icon: '⏸️',
      title: 'Produtos Parados',
      description: 'Não sabe quais produtos não estão vendendo e ocupam espaço',
    },
    {
      icon: '⏱️',
      title: 'Processos Manuais',
      description: 'Gasta muito tempo com planilhas e anotações em papel',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Você já passou por isso?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Problemas comuns que pequenas lojas de roupas enfrentam no dia a dia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <Card key={index} hover>
              <div className="text-center">
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

