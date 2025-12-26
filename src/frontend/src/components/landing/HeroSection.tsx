'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Controle de Estoque Simples
            <br />
            <span className="text-primary-500">para Lojas de Roupas</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
            Gerencie seu estoque com facilidade, evite perdas e aumente suas vendas.
            Sistema simples e eficiente feito especialmente para pequenas lojas de roupas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onCTAClick}
              variant="primary"
              size="large"
              className="w-full sm:w-auto"
            >
              Quero Experimentar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

