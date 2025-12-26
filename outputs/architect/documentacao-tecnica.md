# Documentação Técnica - Site de Marketing

## 1. Visão Geral

Esta documentação técnica descreve a arquitetura, stack tecnológica, padrões de desenvolvimento e especificações técnicas do site de marketing do micro SaaS de controle de estoque.

**Versão**: 1.0  
**Última Atualização**: [Data]  
**Status**: Aprovado

---

## 2. Stack Tecnológica

### 2.1 Frontend

#### Next.js 14+ (App Router)
- **Versão**: 14.x ou superior
- **Razão**: SSR/SSG, performance, SEO, developer experience
- **Features utilizadas**:
  - App Router (Next.js 13+)
  - Server Components
  - Client Components
  - API Routes (se necessário)
  - Image Optimization
  - Font Optimization

#### React 18+
- **Versão**: 18.x ou superior
- **Razão**: Biblioteca base do Next.js
- **Features utilizadas**:
  - Hooks (useState, useEffect, etc.)
  - Server Components
  - Client Components

#### TypeScript
- **Versão**: 5.x
- **Razão**: Type safety, melhor DX, menos bugs
- **Configuração**: Strict mode habilitado

#### Bibliotecas de Suporte

**Validação**:
- **Zod**: Schema validation
  - Versão: 3.x
  - Uso: Validação de formulários, schemas de API

**Estilização**:
- **Tailwind CSS**: Utility-first CSS
  - Versão: 3.x
  - Uso: Estilização de componentes
  - Ou **CSS Modules**: Estilos scoped

**Gerenciamento de Estado**:
- **React Hooks**: useState, useReducer
- **Context API**: Estado global (se necessário)
- **Zustand** (opcional): Para estado mais complexo

**Formulários**:
- **React Hook Form**: Gerenciamento de formulários
  - Versão: 7.x
  - Integração com Zod para validação

**HTTP Client**:
- **Fetch API**: Nativo do browser
- **Axios** (opcional): Para mais funcionalidades

---

### 2.2 Backend

#### Strapi 5
- **Versão**: 5.x
- **Razão**: CMS headless, rápido desenvolvimento, flexível
- **Features utilizadas**:
  - Content Types
  - REST API
  - Middleware
  - Plugins

#### Node.js
- **Versão**: 18.x LTS ou superior
- **Razão**: Runtime do Strapi

#### Database
- **PostgreSQL** (Produção)
  - Versão: 14.x ou superior
  - Razão: Robusto, escalável, open-source
- **SQLite** (Desenvolvimento)
  - Versão: 3.x
  - Razão: Simplicidade para desenvolvimento local

---

### 2.3 Infraestrutura

#### Hosting Frontend
- **Vercel** (Recomendado)
  - Razão: Otimizado para Next.js, CDN global, deploy automático
- **Alternativas**: Netlify, AWS Amplify

#### Hosting Backend
- **Strapi Cloud** (Recomendado)
  - Razão: Gerenciado, fácil deploy
- **Alternativas**: Railway, Render, VPS (DigitalOcean, AWS EC2)

#### Database Hosting
- **Supabase** (PostgreSQL gerenciado)
- **Alternativas**: AWS RDS, Railway, Render

#### CDN
- **Vercel Edge Network** (incluído com Vercel)
- **Alternativas**: Cloudflare, AWS CloudFront

---

### 2.4 Ferramentas de Desenvolvimento

#### Version Control
- **Git**: Controle de versão
- **GitHub/GitLab**: Repositório remoto

#### Package Manager
- **npm**: Gerenciador de pacotes
- **Alternativas**: yarn, pnpm

#### Build Tools
- **Next.js Build**: Build nativo
- **TypeScript Compiler**: Compilação de tipos

#### Linting & Formatting
- **ESLint**: Linting de código
- **Prettier**: Formatação de código
- **Husky**: Git hooks
- **lint-staged**: Lint apenas arquivos staged

#### Testing
- **Jest**: Framework de testes
- **React Testing Library**: Testes de componentes
- **Playwright** (opcional): E2E testing

---

## 3. Estrutura de Código

### 3.1 Estrutura do Projeto Frontend

```
estoque-roupas-marketing/
├── .next/                    # Build output (gitignored)
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.js         # Se usar Tailwind
├── public/                    # Arquivos estáticos
│   ├── images/
│   └── favicon.ico
├── src/                       # Código fonte
│   ├── app/                   # App Router (Next.js 13+)
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Landing page
│   │   ├── confirmacao/
│   │   │   └── page.tsx
│   │   └── api/               # API Routes (se necessário)
│   ├── components/            # Componentes React
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── landing/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemsSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── PlansSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── form/
│   │   │   ├── SignupForm.tsx
│   │   │   ├── FormField.tsx
│   │   │   ├── CEPInput.tsx
│   │   │   └── PlanSelector.tsx
│   │   ├── ui/                # Componentes UI reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Card.tsx
│   │   └── confirmation/
│   │       └── ConfirmationMessage.tsx
│   ├── lib/                   # Utilitários e serviços
│   │   ├── api/
│   │   │   ├── strapi.ts      # Cliente Strapi
│   │   │   └── cep.ts         # Cliente CEP API
│   │   ├── validation/
│   │   │   └── schema.ts      # Schemas Zod
│   │   └── utils/
│   │       └── helpers.ts
│   ├── types/                 # TypeScript types
│   │   ├── signup.ts
│   │   └── index.ts
│   └── styles/                # Estilos globais
│       └── globals.css
└── README.md
```

---

### 3.2 Estrutura do Projeto Backend (Strapi)

```
strapi-backend/
├── .env
├── .gitignore
├── package.json
├── config/
│   ├── database.js
│   ├── server.js
│   └── plugins.js
├── src/
│   ├── api/
│   │   └── signup/
│   │       ├── content-types/
│   │       │   └── signup/
│   │       │       └── schema.json
│   │       ├── controllers/
│   │       │   └── signup.ts
│   │       ├── routes/
│   │       │   └── signup.ts
│   │       └── services/
│   │           └── signup.ts
│   ├── components/
│   │   └── endereco/
│   │       └── schema.json
│   ├── middlewares/
│   │   └── rate-limit.js
│   └── index.ts
└── README.md
```

---

## 4. Padrões de Desenvolvimento

### 4.1 Convenções de Nomenclatura

#### Arquivos e Pastas
- **Componentes**: PascalCase (`SignupForm.tsx`)
- **Utilitários**: camelCase (`helpers.ts`, `strapi.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`)
- **Pastas**: kebab-case (`signup-form/`) ou camelCase (`signupForm/`)

#### Variáveis e Funções
- **Variáveis**: camelCase (`userName`, `isLoading`)
- **Funções**: camelCase (`handleSubmit`, `validateEmail`)
- **Componentes**: PascalCase (`SignupForm`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_RETRIES`)

#### Types/Interfaces
- **Interfaces**: PascalCase com prefixo `I` (opcional) (`ISignupData`)
- **Types**: PascalCase (`SignupData`, `ApiResponse`)

---

### 4.2 Estrutura de Componentes

```typescript
// Exemplo: SignupForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/lib/validation/schema';
import { Button } from '@/components/ui/Button';
import { FormField } from './FormField';

interface SignupFormProps {
  onSuccess?: () => void;
}

export function SignupForm({ onSuccess }: SignupFormProps) {
  // 1. Hooks
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 2. Form setup
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: { /* ... */ }
  });

  // 3. Handlers
  const handleSubmit = async (data: SignupData) => {
    // ...
  };

  // 4. Render
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {/* ... */}
    </form>
  );
}
```

**Ordem dentro do componente**:
1. Imports
2. Types/Interfaces
3. Component
4. Hooks
5. State
6. Handlers
7. Effects
8. Render

---

### 4.3 Padrões de Código

#### TypeScript
- **Sempre tipar**: Props, funções, variáveis
- **Evitar `any`**: Usar `unknown` se necessário
- **Interfaces vs Types**: Interfaces para objetos, Types para unions/intersections

#### React
- **Functional Components**: Sempre usar function components
- **Hooks**: Custom hooks para lógica reutilizável
- **Performance**: useMemo, useCallback quando necessário
- **Acessibilidade**: Sempre incluir ARIA labels

#### Error Handling
```typescript
try {
  const response = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result = await response.json();
  return result;
} catch (error) {
  console.error('Error submitting form:', error);
  throw error;
}
```

---

## 5. APIs e Integrações

### 5.1 API Strapi

#### Endpoint: POST /api/signups

**Request**:
```typescript
{
  data: {
    nome: string;
    email: string;
    nomeLoja: string;
    quantidadeFuncionarios: number;
    endereco: {
      cep: string;
      logradouro: string;
      bairro: string;
      cidade: string;
      estado: string;
      complemento?: string;
    };
    plano: 'gratuito' | 'premium';
  }
}
```

**Response (Success - 200)**:
```typescript
{
  data: {
    id: number;
    attributes: {
      nome: string;
      email: string;
      // ... outros campos
      createdAt: string;
      updatedAt: string;
    }
  }
}
```

**Response (Error - 400/500)**:
```typescript
{
  error: {
    status: number;
    message: string;
    details?: object;
  }
}
```

---

### 5.2 API CEP (ViaCEP)

#### Endpoint: GET https://viacep.com.br/ws/{cep}/json/

**Request**:
- CEP: 8 dígitos (sem hífen)

**Response (Success)**:
```json
{
  "cep": "01310-100",
  "logradouro": "Avenida Paulista",
  "complemento": "",
  "bairro": "Bela Vista",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

**Response (Error)**:
```json
{
  "erro": true
}
```

---

### 5.3 Cliente API (Exemplo)

```typescript
// lib/api/strapi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function createSignup(data: SignupData) {
  const response = await fetch(`${STRAPI_URL}/api/signups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to create signup');
  }

  return response.json();
}
```

---

## 6. Validação

### 6.1 Schema de Validação (Zod)

```typescript
// lib/validation/schema.ts
import { z } from 'zod';

export const enderecoSchema = z.object({
  cep: z.string().length(8, 'CEP deve ter 8 dígitos'),
  logradouro: z.string().min(2, 'Logradouro é obrigatório'),
  bairro: z.string().min(2, 'Bairro é obrigatório'),
  cidade: z.string().min(2, 'Cidade é obrigatória'),
  estado: z.string().length(2, 'Estado deve ter 2 caracteres'),
  complemento: z.string().optional(),
});

export const signupSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  nomeLoja: z.string().min(2, 'Nome da loja é obrigatório'),
  quantidadeFuncionarios: z.number().min(1, 'Deve ter pelo menos 1 funcionário'),
  endereco: enderecoSchema,
  plano: z.enum(['gratuito', 'premium'], {
    errorMap: () => ({ message: 'Selecione um plano' }),
  }),
});

export type SignupData = z.infer<typeof signupSchema>;
```

---

## 7. Segurança

### 7.1 Medidas de Segurança

#### Frontend
- **Input Validation**: Zod schemas
- **XSS Protection**: React escapa automaticamente
- **CSRF Protection**: Tokens se necessário
- **Content Security Policy**: Headers configurados
- **HTTPS**: Obrigatório em produção

#### Backend (Strapi)
- **Rate Limiting**: Limitar requisições por IP
- **CORS**: Configurado corretamente
- **Input Sanitization**: Strapi faz automaticamente
- **SQL Injection**: Prevenido pelo ORM
- **Authentication**: API keys para admin

#### Dados
- **PII Protection**: Dados sensíveis protegidos
- **Encryption**: HTTPS em trânsito
- **Backup**: Backups regulares do database

---

### 7.2 Variáveis de Ambiente

```bash
# Frontend (.env.local)
NEXT_PUBLIC_STRAPI_URL=https://api.example.com
NEXT_PUBLIC_CEP_API_URL=https://viacep.com.br/ws

# Backend (.env)
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=***
JWT_SECRET=***
ADMIN_JWT_SECRET=***
```

**⚠️ Nunca commitar arquivos .env no Git**

---

## 8. Performance

### 8.1 Otimizações Frontend

#### Next.js
- **SSG**: Páginas estáticas quando possível
- **SSR**: Para conteúdo dinâmico
- **ISR**: Incremental Static Regeneration
- **Image Optimization**: next/image
- **Font Optimization**: next/font
- **Code Splitting**: Automático

#### React
- **Lazy Loading**: Componentes pesados
- **Memoization**: useMemo, useCallback
- **Virtual Scrolling**: Se listas grandes

---

### 8.2 Otimizações Backend

#### Strapi
- **Database Indexing**: Índices em campos frequentes
- **Query Optimization**: Selecionar apenas campos necessários
- **Caching**: Response caching
- **Connection Pooling**: Gerenciar conexões

---

## 9. Testes

### 9.1 Estratégia de Testes

#### Unit Tests
- **Componentes**: React Testing Library
- **Utils**: Jest
- **Cobertura**: > 80%

#### Integration Tests
- **API**: Testar endpoints
- **Formulários**: Testar fluxo completo

#### E2E Tests (Opcional)
- **Playwright**: Testes end-to-end
- **Cenários críticos**: Cadastro, validação

---

### 9.2 Exemplo de Teste

```typescript
// __tests__/components/SignupForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { SignupForm } from '@/components/form/SignupForm';

describe('SignupForm', () => {
  it('should validate required fields', async () => {
    render(<SignupForm />);
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(submitButton);
    
    expect(await screen.findByText(/nome é obrigatório/i)).toBeInTheDocument();
  });
});
```

---

## 10. Deploy

### 10.1 Processo de Deploy

#### Frontend (Vercel)
1. Push para branch `main`
2. Vercel detecta mudanças
3. Build automático
4. Deploy automático
5. Health check

#### Backend (Strapi Cloud)
1. Push para repositório
2. Strapi Cloud detecta mudanças
3. Build automático
4. Deploy automático
5. Migrations (se necessário)

---

### 10.2 CI/CD

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npm run build
```

---

## 11. Monitoramento

### 11.1 Ferramentas

- **Error Tracking**: Sentry
- **Analytics**: Vercel Analytics, Google Analytics
- **Performance**: Lighthouse CI
- **Uptime**: UptimeRobot, Pingdom

---

## 12. Próximos Passos

1. ✅ **Documentação criada**: Especificações técnicas definidas
2. ⏭️ **Setup do projeto**: Inicializar repositórios
3. ⏭️ **Desenvolvimento**: Seguir padrões definidos
4. ⏭️ **Testes**: Implementar testes
5. ⏭️ **Deploy**: Configurar CI/CD

---

**Documento criado em**: [Data]  
**Versão**: 1.0  
**Autor**: Arquiteto de Software  
**Status**: Aprovado

