'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface HeaderProps {
  onCTAClick: () => void;
}

export function Header({ onCTAClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm transition-all duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary-500">
              Estoque Roupas
            </h1>
          </div>
          <Button
            onClick={onCTAClick}
            variant="primary"
            size="medium"
            className="hidden sm:inline-flex"
          >
            Quero Experimentar
          </Button>
          <Button
            onClick={onCTAClick}
            variant="primary"
            size="small"
            className="sm:hidden"
          >
            Experimentar
          </Button>
        </div>
      </div>
    </header>
  );
}

