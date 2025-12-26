import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConfirmationMessage } from '@/components/confirmation/ConfirmationMessage';

export default function ConfirmacaoPage() {
  return (
    <>
      <Header onCTAClick={() => {}} />
      <main className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ConfirmationMessage />
        </div>
      </main>
      <Footer />
    </>
  );
}

