import React from 'react';

export function SolutionSection() {
  const features = [
    'Controle de estoque por variação (tamanho e cor)',
    'Aviso de estoque baixo',
    'Bloqueio de venda quando zerar',
    'Ajuste manual (perda, troca, inventário)',
    'Entrada e saída de produto',
    'Venda rápida (atualiza estoque automaticamente)',
    'Relatórios básicos (produtos mais vendidos, produtos parados, faturamento por período, lucro estimado)',
    'Alerta de reposição',
    'CRUD de fornecedores',
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Solução para sua Loja
            </h2>
            <p className="text-lg text-gray-600">
              Um sistema completo e simples para gerenciar seu estoque
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-success-500 mr-3 flex-shrink-0 mt-0.5"
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
          </div>
        </div>
      </div>
    </section>
  );
}

