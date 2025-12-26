# Decisões Arquiteturais (ADRs) - Site de Marketing

## 1. Visão Geral

Este documento registra as decisões arquiteturais importantes (Architecture Decision Records - ADRs) tomadas durante o projeto do site de marketing. Cada ADR documenta o contexto, a decisão tomada e suas consequências.

**Formato**: Baseado no formato de ADR de Michael Nygard  
**Versão**: 1.0  
**Status**: Ativo

---

## ADR-001: Uso do Next.js com App Router

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos escolher um framework para o frontend que:
- Suporte Server-Side Rendering (SSR) para SEO
- Tenha boa performance
- Seja fácil de manter
- Tenha boa comunidade e suporte
- Suporte TypeScript nativamente

### Decisão

Escolhemos **Next.js 14+ com App Router** como framework principal do frontend.

**Razões**:
1. **SSR/SSG nativo**: Melhor SEO e performance
2. **App Router**: Nova arquitetura mais moderna e flexível
3. **TypeScript**: Suporte nativo
4. **Ecosystem**: Grande ecossistema e comunidade
5. **Vercel**: Otimizado para deploy na Vercel
6. **Developer Experience**: Excelente DX

### Consequências

**Positivas**:
- ✅ SEO otimizado automaticamente
- ✅ Performance excelente (SSG, ISR)
- ✅ Deploy fácil na Vercel
- ✅ Boa experiência de desenvolvimento
- ✅ TypeScript nativo

**Negativas**:
- ⚠️ Curva de aprendizado para App Router (nova API)
- ⚠️ Algumas bibliotecas podem não estar atualizadas
- ⚠️ Dependência da Vercel (se usar features específicas)

**Alternativas Consideradas**:
- **Remix**: Boa opção, mas menor comunidade
- **Astro**: Focado em conteúdo estático, menos flexível
- **Gatsby**: Mais complexo, curva de aprendizado maior

---

## ADR-002: Strapi 5 como Backend CMS

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos de um backend para:
- Receber e armazenar dados do formulário de inscrição
- Gerenciar conteúdo (se necessário no futuro)
- Ter API REST pronta
- Ser fácil de manter e escalar
- Suportar autenticação e autorização

### Decisão

Escolhemos **Strapi 5** como CMS headless para o backend.

**Razões**:
1. **CMS Headless**: Flexível, API-first
2. **Rápido desenvolvimento**: Content Types fáceis de criar
3. **REST API**: Pronta para uso
4. **Admin Panel**: Interface administrativa incluída
5. **Extensível**: Plugins e customizações
6. **Open Source**: Sem custos de licenciamento

### Consequências

**Positivas**:
- ✅ Desenvolvimento rápido
- ✅ Admin panel para gerenciar dados
- ✅ API REST pronta
- ✅ Extensível com plugins
- ✅ Suporte a múltiplos databases

**Negativas**:
- ⚠️ Strapi 5 é relativamente novo (pode ter bugs)
- ⚠️ Documentação pode estar incompleta
- ⚠️ Performance pode ser limitada em escala muito alta
- ⚠️ Curva de aprendizado para customizações avançadas

**Alternativas Consideradas**:
- **Strapi 4**: Mais estável, mas versão antiga
- **Directus**: Boa opção, mas menos popular
- **Custom API (Express)**: Mais controle, mas mais trabalho
- **Firebase**: Vendor lock-in, custos podem escalar

---

## ADR-003: PostgreSQL como Database de Produção

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos escolher um database que:
- Seja confiável e robusto
- Suporte relacionamentos complexos
- Seja escalável
- Tenha boa performance
- Seja open-source (preferencialmente)

### Decisão

Escolhemos **PostgreSQL** como database de produção.

**Razões**:
1. **Robustez**: Database maduro e confiável
2. **Relacionamentos**: Suporte completo a relacionamentos
3. **Escalabilidade**: Boa escalabilidade horizontal e vertical
4. **Performance**: Excelente performance
5. **Open Source**: Sem custos de licenciamento
6. **Ecosystem**: Grande ecossistema e ferramentas

### Consequências

**Positivas**:
- ✅ Database robusto e confiável
- ✅ Suporte a relacionamentos complexos
- ✅ Boa performance
- ✅ Escalável
- ✅ Ferramentas e suporte abundantes

**Negativas**:
- ⚠️ Requer mais conhecimento para otimização
- ⚠️ Pode ser overkill para projetos muito simples
- ⚠️ Requer gerenciamento (ou usar serviço gerenciado)

**Alternativas Consideradas**:
- **MySQL**: Boa opção, mas PostgreSQL é mais robusto
- **MongoDB**: NoSQL, não ideal para relacionamentos
- **SQLite**: Bom para desenvolvimento, não para produção
- **Supabase**: PostgreSQL gerenciado, boa opção

---

## ADR-004: TypeScript para Type Safety

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos decidir se usamos TypeScript ou JavaScript puro. Considerações:
- Type safety
- Developer experience
- Curva de aprendizado
- Manutenibilidade

### Decisão

Escolhemos **TypeScript** com strict mode habilitado.

**Razões**:
1. **Type Safety**: Detecta erros em tempo de compilação
2. **IntelliSense**: Melhor autocomplete e sugestões
3. **Refactoring**: Mais seguro refatorar código
4. **Documentação**: Types servem como documentação
5. **Ecosystem**: Suporte amplo no ecossistema React/Next.js

### Consequências

**Positivas**:
- ✅ Menos bugs em produção
- ✅ Melhor experiência de desenvolvimento
- ✅ Código mais manutenível
- ✅ Refactoring mais seguro
- ✅ Documentação implícita

**Negativas**:
- ⚠️ Curva de aprendizado inicial
- ⚠️ Mais verboso que JavaScript
- ⚠️ Tempo de compilação ligeiramente maior
- ⚠️ Pode ser frustrante em alguns casos (any, type assertions)

**Alternativas Consideradas**:
- **JavaScript**: Mais simples, mas menos seguro
- **Flow**: Alternativa, mas menos popular
- **JSDoc**: Type hints sem TypeScript, mas menos robusto

---

## ADR-005: Zod para Validação de Schemas

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos de uma biblioteca de validação que:
- Valide dados de formulários
- Gere types TypeScript
- Seja type-safe
- Tenha boa integração com React Hook Form
- Seja fácil de usar

### Decisão

Escolhemos **Zod** para validação de schemas.

**Razões**:
1. **Type Safety**: Gera types TypeScript automaticamente
2. **Integração**: Excelente integração com React Hook Form
3. **API Simples**: API intuitiva e fácil de usar
4. **Comunidade**: Grande comunidade e suporte
5. **Performance**: Boa performance
6. **Flexibilidade**: Suporta validações complexas

### Consequências

**Positivas**:
- ✅ Validação type-safe
- ✅ Types gerados automaticamente
- ✅ Boa integração com React Hook Form
- ✅ API simples e intuitiva
- ✅ Validação no frontend e backend (se necessário)

**Negativas**:
- ⚠️ Bundle size adicional (mas pequeno)
- ⚠️ Curva de aprendizado inicial
- ⚠️ Pode ser verboso para schemas muito complexos

**Alternativas Consideradas**:
- **Yup**: Boa opção, mas menos type-safe
- **Joi**: Mais para Node.js, menos para frontend
- **Superstruct**: Alternativa, mas menos popular
- **Validação manual**: Mais trabalho, menos type-safe

---

## ADR-006: React Hook Form para Gerenciamento de Formulários

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos de uma solução para gerenciar formulários que:
- Seja performática (menos re-renders)
- Tenha boa integração com validação
- Seja fácil de usar
- Suporte acessibilidade

### Decisão

Escolhemos **React Hook Form** para gerenciamento de formulários.

**Razões**:
1. **Performance**: Menos re-renders que outras soluções
2. **Integração**: Excelente integração com Zod
3. **API Simples**: API intuitiva baseada em hooks
4. **Acessibilidade**: Suporte a ARIA e navegação por teclado
5. **Comunidade**: Grande comunidade e suporte
6. **Bundle Size**: Pequeno bundle size

### Consequências

**Positivas**:
- ✅ Performance excelente
- ✅ Menos re-renders
- ✅ Boa integração com Zod
- ✅ API simples
- ✅ Pequeno bundle size

**Negativas**:
- ⚠️ Curva de aprendizado inicial
- ⚠️ Pode ser diferente de outras soluções (Formik, etc.)

**Alternativas Consideradas**:
- **Formik**: Mais popular, mas menos performático
- **React Final Form**: Boa opção, mas menos mantido
- **Controlled Components**: Nativo, mas mais verboso

---

## ADR-007: ViaCEP como API de CEP Primária

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos de uma API para buscar endereços por CEP que:
- Seja gratuita
- Seja confiável
- Tenha boa performance
- Não requeira autenticação
- Tenha boa documentação

### Decisão

Escolhemos **ViaCEP** como API primária de CEP, com **BrasilAPI** como fallback.

**Razões**:
1. **Gratuita**: Sem custos
2. **Confiável**: API amplamente usada
3. **Performance**: Boa performance
4. **Sem Autenticação**: Fácil de usar
5. **Documentação**: Boa documentação
6. **Fallback**: BrasilAPI como backup

### Consequências

**Positivas**:
- ✅ Gratuita
- ✅ Fácil de integrar
- ✅ Boa performance
- ✅ Sem necessidade de autenticação
- ✅ Fallback disponível

**Negativas**:
- ⚠️ Dependência de serviço externo
- ⚠️ Pode estar indisponível ocasionalmente
- ⚠️ Sem SLA garantido
- ⚠️ Rate limiting não documentado

**Alternativas Consideradas**:
- **BrasilAPI**: Boa opção, escolhida como fallback
- **API dos Correios**: Requer autenticação, mais complexa
- **Preenchimento manual**: Sem dependência, mas pior UX

---

## ADR-008: Vercel para Hosting do Frontend

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos escolher uma plataforma de hosting para o frontend que:
- Seja otimizada para Next.js
- Tenha CDN global
- Suporte deploy automático
- Seja fácil de usar
- Tenha boa performance

### Decisão

Escolhemos **Vercel** para hosting do frontend.

**Razões**:
1. **Otimizado para Next.js**: Criado pelos mesmos desenvolvedores
2. **CDN Global**: Edge network global
3. **Deploy Automático**: Integração com Git
4. **Fácil de Usar**: Setup simples
5. **Performance**: Excelente performance
6. **Plano Gratuito**: Plano gratuito generoso

### Consequências

**Positivas**:
- ✅ Deploy automático
- ✅ CDN global
- ✅ Performance excelente
- ✅ Fácil de usar
- ✅ Plano gratuito disponível

**Negativas**:
- ⚠️ Vendor lock-in (se usar features específicas)
- ⚠️ Custos podem escalar em alto tráfego
- ⚠️ Menos controle que VPS próprio

**Alternativas Consideradas**:
- **Netlify**: Boa opção, mas menos otimizado para Next.js
- **AWS Amplify**: Mais complexo, mais controle
- **VPS próprio**: Mais controle, mas mais trabalho
- **Cloudflare Pages**: Boa opção, mas menos features

---

## ADR-009: Tailwind CSS para Estilização

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto, UX Designer

### Contexto

Precisamos escolher uma abordagem de estilização que:
- Seja consistente com o design system
- Seja fácil de manter
- Tenha boa performance
- Seja produtiva

### Decisão

Escolhemos **Tailwind CSS** para estilização.

**Razões**:
1. **Utility-First**: Alinhado com design system
2. **Produtividade**: Desenvolvimento rápido
3. **Consistência**: Garante consistência visual
4. **Performance**: Purge CSS automático
5. **Comunidade**: Grande comunidade
6. **Design System**: Fácil de integrar com design tokens

### Consequências

**Positivas**:
- ✅ Desenvolvimento rápido
- ✅ Consistência visual
- ✅ Performance (CSS otimizado)
- ✅ Fácil manutenção
- ✅ Alinhado com design system

**Negativas**:
- ⚠️ Curva de aprendizado inicial
- ⚠️ HTML pode ficar verboso
- ⚠️ Pode ser difícil para designers acostumados com CSS tradicional

**Alternativas Consideradas**:
- **CSS Modules**: Mais controle, mas menos produtivo
- **Styled Components**: Boa opção, mas bundle maior
- **CSS-in-JS**: Mais complexo, performance pode ser pior
- **CSS puro**: Mais controle, mas menos produtivo

---

## ADR-010: Estrutura de Pastas Baseada em Features

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos decidir como organizar a estrutura de pastas do projeto:
- Por tipo de arquivo (components/, utils/, etc.)
- Por feature (signup/, landing/, etc.)
- Híbrido

### Decisão

Escolhemos estrutura **híbrida**: componentes organizados por feature, utils/services organizados por tipo.

**Estrutura**:
```
components/
  ├── layout/        # Componentes de layout
  ├── landing/       # Componentes da landing page
  ├── form/          # Componentes de formulário
  ├── ui/            # Componentes UI reutilizáveis
  └── confirmation/  # Componentes de confirmação

lib/
  ├── api/           # Clientes de API
  ├── validation/    # Schemas de validação
  └── utils/         # Utilitários gerais
```

**Razões**:
1. **Organização**: Fácil encontrar componentes relacionados
2. **Escalabilidade**: Fácil adicionar novas features
3. **Manutenibilidade**: Código relacionado fica junto
4. **Clareza**: Estrutura clara e intuitiva

### Consequências

**Positivas**:
- ✅ Fácil navegação
- ✅ Código relacionado agrupado
- ✅ Escalável
- ✅ Intuitivo

**Negativas**:
- ⚠️ Pode haver duplicação de componentes similares
- ⚠️ Requer disciplina para manter organização

**Alternativas Consideradas**:
- **Por tipo**: components/, utils/, etc. (mais tradicional)
- **Por feature completa**: signup/, landing/, etc. (mais isolado)

---

## ADR-011: Validação no Frontend e Backend

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos decidir onde fazer validação:
- Apenas no frontend (rápido, mas inseguro)
- Apenas no backend (seguro, mas pior UX)
- Ambos (melhor UX e segurança)

### Decisão

Escolhemos **validação em ambos os lados** (frontend e backend).

**Frontend**:
- Validação em tempo real com Zod
- Feedback imediato ao usuário
- Melhor UX

**Backend**:
- Validação final com Strapi
- Segurança (não confiar apenas no frontend)
- Última camada de proteção

**Razões**:
1. **UX**: Validação em tempo real melhora experiência
2. **Segurança**: Backend sempre valida (não confiar no frontend)
3. **Consistência**: Mesmos schemas (Zod) em ambos os lados
4. **Performance**: Validação no frontend evita requisições desnecessárias

### Consequências

**Positivas**:
- ✅ Melhor UX (feedback imediato)
- ✅ Segurança (validação no backend)
- ✅ Consistência (mesmos schemas)
- ✅ Performance (menos requisições inválidas)

**Negativas**:
- ⚠️ Duplicação de lógica de validação (mas pode ser compartilhada)
- ⚠️ Mais trabalho inicial

**Alternativas Consideradas**:
- **Apenas frontend**: Melhor UX, mas inseguro
- **Apenas backend**: Seguro, mas pior UX
- **Validação compartilhada**: Ideal, mas requer setup adicional

---

## ADR-012: Rate Limiting no Backend

**Status**: Aceito  
**Data**: [Data]  
**Decisores**: Equipe Técnica, Arquiteto

### Contexto

Precisamos proteger o backend contra:
- Spam de requisições
- Ataques de força bruta
- Abuso de API

### Decisão

Implementamos **rate limiting** no Strapi usando middleware.

**Configuração**:
- **Formulário de inscrição**: 5 requisições por IP por minuto
- **API geral**: 100 requisições por IP por minuto

**Razões**:
1. **Segurança**: Protege contra spam e abuso
2. **Performance**: Evita sobrecarga do servidor
3. **Custos**: Evita custos desnecessários
4. **Experiência**: Protege experiência de outros usuários

### Consequências

**Positivas**:
- ✅ Proteção contra spam
- ✅ Melhor performance
- ✅ Controle de custos
- ✅ Proteção de recursos

**Negativas**:
- ⚠️ Pode bloquear usuários legítimos (se muito restritivo)
- ⚠️ Requer configuração cuidadosa

**Alternativas Consideradas**:
- **Sem rate limiting**: Mais vulnerável
- **Rate limiting muito restritivo**: Pior UX
- **Rate limiting por usuário**: Mais complexo, requer autenticação

---

## Resumo das Decisões

| ADR | Decisão | Status |
|-----|---------|--------|
| ADR-001 | Next.js com App Router | ✅ Aceito |
| ADR-002 | Strapi 5 como Backend | ✅ Aceito |
| ADR-003 | PostgreSQL como Database | ✅ Aceito |
| ADR-004 | TypeScript | ✅ Aceito |
| ADR-005 | Zod para Validação | ✅ Aceito |
| ADR-006 | React Hook Form | ✅ Aceito |
| ADR-007 | ViaCEP como API CEP | ✅ Aceito |
| ADR-008 | Vercel para Hosting | ✅ Aceito |
| ADR-009 | Tailwind CSS | ✅ Aceito |
| ADR-010 | Estrutura Híbrida | ✅ Aceito |
| ADR-011 | Validação Dupla | ✅ Aceito |
| ADR-012 | Rate Limiting | ✅ Aceito |

---

**Documento criado em**: [Data]  
**Versão**: 1.0  
**Autor**: Arquiteto de Software  
**Status**: Aprovado

