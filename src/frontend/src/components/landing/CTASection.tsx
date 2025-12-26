'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface CTASectionProps {
  onCTAClick: () => void;
}

export function CTASection({ onCTAClick }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-primary-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Experimente grátis agora mesmo e veja como é fácil gerenciar seu estoque
          </p>
          <Button
            onClick={onCTAClick}
            variant="secondary"
            size="large"
            className="bg-white text-primary-500 hover:bg-gray-100"
          >
            Quero Experimentar
          </Button>
        </div>
      </div>
    </section>
  );
}

