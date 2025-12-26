# Guias de Desenvolvimento - Site de Marketing

## 1. Visão Geral

Este documento fornece guias práticos para desenvolvimento do site de marketing, incluindo setup do ambiente, comandos úteis, padrões de código e boas práticas.

**Versão**: 1.0  
**Última Atualização**: [Data]  
**Status**: Ativo

---

## 2. Setup do Ambiente

### 2.1 Pré-requisitos

**Software Necessário**:
- Node.js 18.x LTS ou superior
- npm 9.x ou superior (ou yarn/pnpm)
- Git
- Editor de código (VS Code recomendado)

**Contas Necessárias**:
- GitHub/GitLab (repositório)
- Vercel (deploy frontend)
- Strapi Cloud ou VPS (deploy backend)
- Database hosting (Supabase, Railway, etc.)

---

### 2.2 Setup do Frontend

#### 2.2.1 Criar Projeto Next.js

```bash
# Criar projeto
npx create-next-app@latest estoque-roupas-marketing --typescript --tailwind --app

# Ou com opções interativas
npx create-next-app@latest estoque-roupas-marketing
```

**Opções recomendadas**:
- TypeScript: ✅ Yes
- ESLint: ✅ Yes
- Tailwind CSS: ✅ Yes
- App Router: ✅ Yes
- src/ directory: ✅ Yes
- Import alias: ✅ Yes (@/*)

#### 2.2.2 Instalar Dependências

```bash
cd estoque-roupas-marketing

# Dependências principais
npm install react-hook-form @hookform/resolvers zod
npm install axios  # ou usar fetch nativo

# Dependências de desenvolvimento
npm install -D @types/node @types/react @types/react-dom
npm install -D eslint-config-next
npm install -D prettier eslint-config-prettier
npm install -D husky lint-staged
```

#### 2.2.3 Configurar Variáveis de Ambiente

Criar arquivo `.env.local`:

```bash
# .env.local
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_CEP_API_URL=https://viacep.com.br/ws
```

#### 2.2.4 Estrutura de Pastas

Criar estrutura de pastas conforme documentação técnica:

```bash
mkdir -p src/components/{layout,landing,form,ui,confirmation}
mkdir -p src/lib/{api,validation,utils}
mkdir -p src/types
```

---

### 2.3 Setup do Backend (Strapi)

#### 2.3.1 Criar Projeto Strapi

```bash
# Criar projeto Strapi 5
npx create-strapi-app@latest strapi-backend --quickstart

# Ou com opções
npx create-strapi-app@latest strapi-backend
```

**Opções**:
- Database: SQLite (dev) ou PostgreSQL (prod)
- Template: Quickstart (SQLite) ou Custom

#### 2.3.2 Configurar Database

Editar `config/database.js`:

```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
```

#### 2.3.3 Criar Content Type

1. Acessar admin panel: `http://localhost:1337/admin`
2. Criar novo Content Type: "Signup"
3. Adicionar campos conforme schema
4. Configurar permissões (Public pode criar)

---

## 3. Comandos Úteis

### 3.1 Frontend (Next.js)

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript

# Testes (quando configurado)
npm test             # Executa testes
npm run test:watch   # Testes em modo watch
npm run test:coverage # Cobertura de testes
```

### 3.2 Backend (Strapi)

```bash
# Desenvolvimento
npm run develop      # Inicia Strapi em modo desenvolvimento
npm run build        # Build para produção
npm run start        # Inicia Strapi em modo produção

# Database
npm run strapi migrations:generate  # Gera migrations
npm run strapi migrations:run        # Executa migrations
```

---

## 4. Padrões de Código

### 4.1 Componentes React

#### Estrutura Padrão

```typescript
// components/form/SignupForm.tsx
'use client'; // Se usar Client Component

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupData } from '@/lib/validation/schema';
import { Button } from '@/components/ui/Button';
import { FormField } from './FormField';

interface SignupFormProps {
  onSuccess?: (data: SignupData) => void;
  onError?: (error: Error) => void;
}

export function SignupForm({ onSuccess, onError }: SignupFormProps) {
  // 1. State
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      plano: 'gratuito',
    },
  });

  // 3. Handlers
  const onSubmit = async (data: SignupData) => {
    setIsSubmitting(true);
    try {
      const response = await createSignup(data);
      onSuccess?.(response);
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. Render
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

#### Regras
- ✅ Sempre tipar props com interface
- ✅ Usar 'use client' apenas quando necessário
- ✅ Ordem: imports, types, component, hooks, state, handlers, effects, render
- ✅ Componentes funcionais apenas
- ✅ Nomes descritivos

---

### 4.2 Hooks Customizados

#### Exemplo: useCEP

```typescript
// lib/hooks/useCEP.ts
import { useState } from 'react';
import { fetchCEP } from '@/lib/api/cep';

interface CEPData {
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export function useCEP() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchCEP = async (cep: string): Promise<CEPData | null> => {
    if (cep.length !== 8) {
      setError('CEP deve ter 8 dígitos');
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchCEP(cep);
      return data;
    } catch (err) {
      setError('CEP não encontrado');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { searchCEP, isLoading, error };
}
```

---

### 4.3 API Clients

#### Exemplo: Cliente Strapi

```typescript
// lib/api/strapi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error('NEXT_PUBLIC_STRAPI_URL is not defined');
}

export async function createSignup(data: SignupData) {
  const response = await fetch(`${STRAPI_URL}/api/signups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({
      error: { message: 'Erro desconhecido' },
    }));
    throw new Error(error.error?.message || 'Failed to create signup');
  }

  return response.json();
}
```

---

## 5. Boas Práticas

### 5.1 Performance

#### Imagens
```typescript
// ✅ Bom: Usar next/image
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // Para imagens acima da dobra
/>
```

#### Code Splitting
```typescript
// ✅ Bom: Lazy loading de componentes pesados
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Carregando...</p>,
});
```

#### Memoization
```typescript
// ✅ Bom: useMemo para cálculos pesados
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// ✅ Bom: useCallback para funções passadas como props
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);
```

---

### 5.2 Acessibilidade

#### Semântica HTML
```typescript
// ✅ Bom: Usar elementos semânticos
<main>
  <section aria-labelledby="hero-title">
    <h1 id="hero-title">Título</h1>
  </section>
</main>

// ❌ Evitar: Divs genéricas
<div>
  <div>Título</div>
</div>
```

#### ARIA Labels
```typescript
// ✅ Bom: Labels descritivos
<button aria-label="Fechar modal">
  <XIcon />
</button>

<input
  type="text"
  aria-label="CEP"
  aria-describedby="cep-error"
  aria-invalid={!!errors.cep}
/>
```

#### Navegação por Teclado
```typescript
// ✅ Bom: Suportar navegação por teclado
<button
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Enviar
</button>
```

---

### 5.3 Tratamento de Erros

#### Try-Catch
```typescript
// ✅ Bom: Tratar erros adequadamente
try {
  const result = await apiCall();
  return result;
} catch (error) {
  console.error('Error:', error);
  
  if (error instanceof Error) {
    throw new Error(`Failed: ${error.message}`);
  }
  
  throw new Error('Unknown error');
}
```

#### Error Boundaries
```typescript
// components/ErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children;
  }
}
```

---

### 5.4 Validação

#### Validação em Tempo Real
```typescript
// ✅ Bom: Validação ao sair do campo
<input
  {...register('email', {
    onBlur: () => trigger('email'), // Valida ao sair
  })}
/>

// ✅ Bom: Validação ao digitar (debounced)
const debouncedValidation = useMemo(
  () => debounce((value: string) => {
    trigger('email');
  }, 300),
  [trigger]
);
```

---

## 6. Git Workflow

### 6.1 Estrutura de Branches

```
main          # Produção
├── develop    # Desenvolvimento
├── feature/*  # Features
├── bugfix/*   # Correções
└── hotfix/*   # Correções urgentes
```

### 6.2 Commits

**Formato**:
```
tipo(escopo): descrição curta

Descrição mais detalhada (opcional)

[footer opcional]
```

**Tipos**:
- `feat`: Nova feature
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Tarefas de manutenção

**Exemplos**:
```bash
feat(form): adiciona validação de CEP
fix(api): corrige tratamento de erro no envio
docs(readme): atualiza instruções de setup
```

### 6.3 Pre-commit Hooks

Configurar Husky:

```bash
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint-staged
```

```json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

---

## 7. Testes

### 7.1 Setup Jest

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

### 7.2 Exemplo de Teste

```typescript
// __tests__/components/SignupForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SignupForm } from '@/components/form/SignupForm';

describe('SignupForm', () => {
  it('should validate required fields', async () => {
    render(<SignupForm />);
    
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument();
    });
  });
});
```

---

## 8. Debugging

### 8.1 VS Code Launch Configuration

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

### 8.2 Logging

```typescript
// ✅ Bom: Usar console.log apenas em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// ✅ Melhor: Usar biblioteca de logging (ex: pino)
import logger from '@/lib/logger';
logger.info('User submitted form', { userId });
```

---

## 9. Checklist de Desenvolvimento

### 9.1 Antes de Commitar

- [ ] Código compila sem erros
- [ ] TypeScript sem erros
- [ ] ESLint sem erros
- [ ] Prettier formatado
- [ ] Testes passando (se houver)
- [ ] Funciona em desenvolvimento
- [ ] Responsivo (mobile/tablet/desktop)
- [ ] Acessível (navegação por teclado, leitor de tela)

### 9.2 Antes de Fazer PR

- [ ] Código revisado
- [ ] Documentação atualizada
- [ ] Testes adicionados (se necessário)
- [ ] Performance verificada
- [ ] Sem console.logs desnecessários
- [ ] Variáveis de ambiente documentadas

---

## 10. Recursos Úteis

### 10.1 Documentação

- [Next.js Docs](https://nextjs.org/docs)
- [Strapi Docs](https://docs.strapi.io/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### 10.2 Ferramentas

- **VS Code Extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin

---

## 11. Troubleshooting

### 11.1 Problemas Comuns

#### Erro: Module not found
```bash
# Limpar cache e reinstalar
rm -rf node_modules .next
npm install
```

#### Erro: Port already in use
```bash
# Matar processo na porta 3000
npx kill-port 3000
```

#### Erro: TypeScript errors
```bash
# Verificar tipos
npm run type-check
```

---

## 12. Próximos Passos

1. ✅ **Guias criados**: Documentação de desenvolvimento completa
2. ⏭️ **Setup**: Configurar ambiente de desenvolvimento
3. ⏭️ **Desenvolvimento**: Seguir guias e padrões
4. ⏭️ **Revisão**: Revisar código regularmente
5. ⏭️ **Melhoria contínua**: Atualizar guias conforme necessário

---

**Documento criado em**: [Data]  
**Versão**: 1.0  
**Autor**: Arquiteto de Software  
**Status**: Aprovado

