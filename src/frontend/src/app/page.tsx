'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemsSection } from '@/components/landing/ProblemsSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { PlansSection } from '@/components/landing/PlansSection';
import { CTASection } from '@/components/landing/CTASection';
import { Modal } from '@/components/ui/Modal';
import { SignupForm } from '@/components/form/SignupForm';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'gratuito' | 'premium' | null>(null);
  const router = useRouter();

  const handleCTAClick = () => {
    setIsModalOpen(true);
  };

  const handlePlanSelect = (plan: 'gratuito' | 'premium') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleFormSuccess = () => {
    setIsModalOpen(false);
    router.push('/confirmacao');
  };

  const handleFormError = (error: Error) => {
    console.error('Erro no formulário:', error);
    // O erro já é exibido no formulário
  };

  return (
    <>
      <Header onCTAClick={handleCTAClick} />
      <main>
        <HeroSection onCTAClick={handleCTAClick} />
        <ProblemsSection />
        <SolutionSection />
        <BenefitsSection />
        <PlansSection onPlanSelect={handlePlanSelect} />
        <CTASection onCTAClick={handleCTAClick} />
      </main>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPlan(null);
        }}
        title="Crie sua conta"
        closeOnOverlayClick={true}
      >
        <SignupForm
          onSuccess={handleFormSuccess}
          onError={handleFormError}
          defaultPlan={selectedPlan}
        />
      </Modal>
    </>
  );
}

