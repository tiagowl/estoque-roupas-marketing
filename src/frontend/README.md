# Frontend - Site de Marketing

Frontend do site de marketing do micro SaaS de controle de estoque, desenvolvido com Next.js 14, React, TypeScript e Tailwind CSS.

## 🚀 Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas configurações:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_CEP_API_URL=https://viacep.com.br/ws
```

### 3. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/frontend/
├── src/
│   ├── app/              # App Router (Next.js 13+)
│   │   ├── layout.tsx
│   │   ├── page.tsx     # Landing page
│   │   └── confirmacao/
│   │       └── page.tsx
│   ├── components/      # Componentes React
│   │   ├── layout/
│   │   ├── landing/
│   │   ├── form/
│   │   ├── ui/
│   │   └── confirmation/
│   ├── lib/             # Utilitários e serviços
│   │   ├── api/
│   │   ├── validation/
│   │   └── utils/
│   ├── types/           # TypeScript types
│   └── styles/          # Estilos globais
├── public/              # Arquivos estáticos
└── package.json
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint
- `npm run type-check` - Verifica tipos TypeScript

## 📚 Tecnologias

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Axios** - Cliente HTTP

## 🔗 Integrações

- **Strapi 5** - Backend API
- **ViaCEP/BrasilAPI** - API de CEP

## 📝 Funcionalidades Implementadas

- ✅ Landing page com proposta de valor
- ✅ Botão CTA "Quero Experimentar"
- ✅ Formulário de inscrição completo
- ✅ Busca automática de CEP
- ✅ Seleção de plano (Gratuito/Premium)
- ✅ Validação em tempo real
- ✅ Integração com backend Strapi
- ✅ Página de confirmação
- ✅ Responsividade mobile-first
- ✅ Acessibilidade (WCAG 2.1 AA)

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js.

## 📄 Licença

MIT

