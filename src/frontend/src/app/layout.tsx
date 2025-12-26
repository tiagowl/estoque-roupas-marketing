import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Controle de Estoque para Lojas de Roupas',
  description: 'Gerencie seu estoque com facilidade, evite perdas e aumente suas vendas. Sistema simples e eficiente para pequenas lojas de roupas.',
  keywords: 'controle de estoque, lojas de roupas, gestão de inventário, estoque por variação',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

