# Diagramas de Arquitetura - Site de Marketing

## 1. Visão Geral

Este documento apresenta os diagramas de arquitetura do site de marketing do micro SaaS de controle de estoque. A arquitetura foi projetada para ser escalável, segura e performática, utilizando Next.js no frontend e Strapi 5 no backend.

**Versão**: 1.0  
**Última Atualização**: [Data]  
**Status**: Aprovado

---

## 2. Arquitetura Geral do Sistema

### 2.1 Diagrama de Alto Nível

```
┌─────────────────────────────────────────────────────────────┐
│                        INTERNET                              │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        │ HTTPS
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
┌───────────────┐              ┌───────────────┐
│   CDN/Edge    │              │   Next.js     │
│   (Vercel)    │◄─────────────┤   Frontend    │
│               │              │   (SSR/SSG)    │
└───────────────┘              └───────┬───────┘
                                       │
                                       │ API REST
                                       │
                              ┌────────┴────────┐
                              │                 │
                              ▼                 ▼
                    ┌──────────────┐   ┌──────────────┐
                    │   Strapi 5   │   │   ViaCEP/    │
                    │   Backend    │   │   BrasilAPI  │
                    │   (CMS)      │   │   (CEP API)  │
                    └──────┬───────┘   └──────────────┘
                           │
                           │
                    ┌──────┴───────┐
                    │   Database   │
                    │   (PostgreSQL│
                    │   / SQLite)  │
                    └──────────────┘
```

**Componentes**:
- **CDN/Edge**: Distribuição de conteúdo estático
- **Next.js Frontend**: Aplicação React com SSR/SSG
- **Strapi 5 Backend**: CMS headless para gerenciar dados
- **Database**: Armazenamento persistente
- **CEP API**: Integração externa para busca de endereços

---

## 3. Arquitetura do Frontend (Next.js)

### 3.1 Estrutura de Componentes

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Application                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              App Router (Next.js 13+)              │    │
│  │  /app                                              │    │
│  │    ├── layout.tsx                                  │    │
│  │    ├── page.tsx (Landing Page)                    │    │
│  │    ├── confirmacao/page.tsx                        │    │
│  │    └── api/ (API Routes - se necessário)          │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Components                            │    │
│  │  /components                                       │    │
│  │    ├── layout/                                     │    │
│  │    │   ├── Header.tsx                             │    │
│  │    │   └── Footer.tsx                             │    │
│  │    ├── landing/                                   │    │
│  │    │   ├── HeroSection.tsx                        │    │
│  │    │   ├── ProblemsSection.tsx                    │    │
│  │    │   ├── SolutionSection.tsx                   │    │
│  │    │   ├── BenefitsSection.tsx                   │    │
│  │    │   ├── PlansSection.tsx                      │    │
│  │    │   └── CTASection.tsx                        │    │
│  │    ├── form/                                      │    │
│  │    │   ├── SignupForm.tsx                        │    │
│  │    │   ├── FormField.tsx                         │    │
│  │    │   ├── CEPInput.tsx                          │    │
│  │    │   └── PlanSelector.tsx                      │    │
│  │    ├── ui/                                        │    │
│  │    │   ├── Button.tsx                             │    │
│  │    │   ├── Input.tsx                              │    │
│  │    │   ├── Modal.tsx                              │    │
│  │    │   └── Card.tsx                               │    │
│  │    └── confirmation/                              │    │
│  │        └── ConfirmationMessage.tsx                │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Services / Utils                      │    │
│  │  /lib                                             │    │
│  │    ├── api/                                       │    │
│  │    │   ├── strapi.ts (Strapi client)            │    │
│  │    │   └── cep.ts (CEP API client)               │    │
│  │    ├── validation/                                │    │
│  │    │   └── schema.ts (Zod/Yup schemas)          │    │
│  │    └── utils/                                     │    │
│  │        └── helpers.ts                            │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              State Management                     │    │
│  │  React Hooks / Zustand / Context API             │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 3.2 Fluxo de Dados no Frontend

```
User Action
    │
    ├─> Component Event
    │       │
    │       ├─> Local State (useState)
    │       │
    │       ├─> Form Validation
    │       │       │
    │       │       └─> Validation Schema (Zod)
    │       │
    │       └─> API Call
    │               │
    │               ├─> Strapi API (Form Submission)
    │               │       │
    │               │       └─> Database
    │               │
    │               └─> CEP API (Address Lookup)
    │                       │
    │                       └─> External Service
    │
    └─> UI Update
            │
            └─> Re-render
```

---

## 4. Arquitetura do Backend (Strapi 5)

### 4.1 Estrutura do Strapi

```
┌─────────────────────────────────────────────────────────────┐
│                    Strapi 5 Application                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Content Types                        │    │
│  │  /src/api                                         │    │
│  │    └── signup/                                    │    │
│  │        ├── content-types/                        │    │
│  │        │   └── signup/                            │    │
│  │        │       └── schema.json                    │    │
│  │        └── controllers/                           │    │
│  │            └── signup.ts                         │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              API Routes                           │    │
│  │  /api/signups                                      │    │
│  │    POST /api/signups (Create)                     │    │
│  │    GET /api/signups (List - admin)                │    │
│  │    GET /api/signups/:id (Get - admin)             │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Middleware                           │    │
│  │  - Authentication                                 │    │
│  │  - Rate Limiting                                  │    │
│  │  - Validation                                     │    │
│  │  - CORS                                           │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Database Layer                         │    │
│  │  ORM (Bookshelf/Knex)                              │    │
│  │    └─> Database (PostgreSQL/SQLite)              │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 4.2 Modelo de Dados

```
┌─────────────────────────────────────────────────────────────┐
│                    Signup Content Type                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Signup                                                      │
│  ├── id (UUID, Primary Key)                                 │
│  ├── nome (String, Required)                                │
│  ├── email (String, Required, Unique, Email)                │
│  ├── nomeLoja (String, Required)                            │
│  ├── quantidadeFuncionarios (Integer, Required, Min: 1)    │
│  ├── endereco (Component)                                   │
│  │   ├── cep (String, Required)                            │
│  │   ├── logradouro (String, Required)                     │
│  │   ├── bairro (String, Required)                          │
│  │   ├── cidade (String, Required)                         │
│  │   ├── estado (String, Required)                         │
│  │   └── complemento (String, Optional)                      │
│  ├── plano (Enum: 'gratuito' | 'premium', Required)        │
│  ├── createdAt (DateTime)                                  │
│  ├── updatedAt (DateTime)                                  │
│  └── publishedAt (DateTime, Optional)                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Fluxo de Dados Completo

### 5.1 Fluxo: Preenchimento e Envio do Formulário

```
┌──────────┐
│  User    │
└────┬─────┘
     │
     │ 1. Preenche Formulário
     ▼
┌──────────────┐
│  Next.js     │
│  Frontend    │
└────┬─────────┘
     │
     │ 2. Validação Local (Zod)
     │
     ├─> 3a. Valida CEP (se necessário)
     │       │
     │       └─> ViaCEP/BrasilAPI
     │               │
     │               └─> Retorna Endereço
     │
     │ 4. Usuário clica "Enviar"
     │
     │ 5. Validação Final
     │
     │ 6. Envia POST /api/signups
     ▼
┌──────────────┐
│  Strapi 5    │
│  Backend     │
└────┬─────────┘
     │
     │ 7. Middleware (Rate Limit, CORS)
     │
     │ 8. Validação no Backend
     │
     │ 9. Verifica Email Duplicado
     │
     │ 10. Salva no Database
     ▼
┌──────────────┐
│  Database    │
│  (PostgreSQL)│
└────┬─────────┘
     │
     │ 11. Retorna Sucesso/Erro
     ▼
┌──────────────┐
│  Next.js     │
│  Frontend    │
└────┬─────────┘
     │
     │ 12. Exibe Confirmação ou Erro
     ▼
┌──────────┐
│  User    │
└──────────┘
```

---

### 5.2 Fluxo: Busca de CEP

```
┌──────────┐
│  User    │
└────┬─────┘
     │
     │ 1. Digita CEP (8 dígitos)
     ▼
┌──────────────┐
│  Next.js     │
│  Frontend    │
└────┬─────────┘
     │
     │ 2. Valida formato (8 dígitos)
     │
     │ 3. Envia GET para CEP API
     │    (ViaCEP ou BrasilAPI)
     ▼
┌──────────────┐
│  CEP API     │
│  (External)  │
└────┬─────────┘
     │
     │ 4. Retorna Endereço ou Erro
     ▼
┌──────────────┐
│  Next.js     │
│  Frontend    │
└────┬─────────┘
     │
     │ 5. Preenche campos automaticamente
     │    ou exibe mensagem de erro
     ▼
┌──────────┐
│  User    │
└──────────┘
```

---

## 6. Integrações Externas

### 6.1 Diagrama de Integrações

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Frontend                         │
└───────────────────────┬─────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Strapi 5   │  │   ViaCEP     │  │  BrasilAPI   │
│   Backend    │  │   (Primary)  │  │  (Fallback)  │
│              │  │              │  │              │
│  - REST API  │  │  - CEP API   │  │  - CEP API   │
│  - Auth      │  │  - Free      │  │  - Free      │
│  - Rate Limit│  │  - No Auth   │  │  - No Auth   │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## 7. Segurança

### 7.1 Camadas de Segurança

```
┌─────────────────────────────────────────────────────────────┐
│                    Security Layers                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Layer 1: Network Security                                 │
│  ├── HTTPS (TLS 1.3)                                       │
│  ├── CDN Protection (DDoS)                                 │
│  └── Firewall Rules                                         │
│                                                              │
│  Layer 2: Application Security (Next.js)                   │
│  ├── Input Validation (Zod)                                │
│  ├── XSS Protection (React)                                 │
│  ├── CSRF Protection                                        │
│  └── Content Security Policy (CSP)                         │
│                                                              │
│  Layer 3: API Security (Strapi)                            │
│  ├── Rate Limiting                                          │
│  ├── CORS Configuration                                    │
│  ├── Input Sanitization                                    │
│  ├── SQL Injection Prevention (ORM)                        │
│  └── Authentication (API Keys)                             │
│                                                              │
│  Layer 4: Data Security                                     │
│  ├── Encryption at Rest                                     │
│  ├── Encryption in Transit                                  │
│  ├── Data Validation                                        │
│  └── PII Protection                                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Performance

### 8.1 Estratégias de Performance

```
┌─────────────────────────────────────────────────────────────┐
│              Performance Optimization                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Frontend (Next.js)                                         │
│  ├── Static Site Generation (SSG)                          │
│  ├── Server Side Rendering (SSR)                            │
│  ├── Image Optimization (next/image)                        │
│  ├── Code Splitting                                         │
│  ├── Lazy Loading                                           │
│  ├── Caching (ISR)                                          │
│  └── Bundle Optimization                                    │
│                                                              │
│  Backend (Strapi)                                           │
│  ├── Database Indexing                                     │
│  ├── Query Optimization                                    │
│  ├── Response Caching                                       │
│  └── Connection Pooling                                    │
│                                                              │
│  Infrastructure                                             │
│  ├── CDN (Edge Caching)                                     │
│  ├── HTTP/2                                                 │
│  ├── Compression (Gzip/Brotli)                             │
│  └── Load Balancing                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. Escalabilidade

### 9.1 Arquitetura Escalável

```
┌─────────────────────────────────────────────────────────────┐
│                    Scalability Architecture                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Horizontal Scaling                                         │
│  ├── Next.js: Multiple Instances (Vercel)                 │
│  ├── Strapi: Multiple Instances (Load Balancer)            │
│  └── Database: Read Replicas                               │
│                                                              │
│  Vertical Scaling                                          │
│  ├── Increase Server Resources                             │
│  └── Database Optimization                                 │
│                                                              │
│  Caching Strategy                                           │
│  ├── CDN Cache (Static Assets)                             │
│  ├── Application Cache (Redis)                              │
│  └── Database Query Cache                                  │
│                                                              │
│  Database Scaling                                          │
│  ├── Connection Pooling                                    │
│  ├── Read/Write Splitting                                   │
│  └── Sharding (Future)                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 10. Monitoramento e Observabilidade

### 10.1 Stack de Observabilidade

```
┌─────────────────────────────────────────────────────────────┐
│              Observability Stack                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Application Monitoring                                    │
│  ├── Error Tracking (Sentry)                              │
│  ├── Performance Monitoring (Vercel Analytics)             │
│  └── Real User Monitoring (RUM)                            │
│                                                              │
│  Infrastructure Monitoring                                 │
│  ├── Server Metrics                                         │
│  ├── Database Metrics                                       │
│  └── Network Metrics                                        │
│                                                              │
│  Logging                                                    │
│  ├── Application Logs                                      │
│  ├── Access Logs                                           │
│  └── Error Logs                                            │
│                                                              │
│  Analytics                                                 │
│  ├── User Behavior (Google Analytics)                      │
│  ├── Conversion Tracking                                   │
│  └── Performance Metrics                                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 11. Deployment

### 11.1 Arquitetura de Deploy

```
┌─────────────────────────────────────────────────────────────┐
│                    Deployment Architecture                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Development Environment                                   │
│  ├── Local Development (Docker)                             │
│  └── Feature Branches                                      │
│                                                              │
│  Staging Environment                                        │
│  ├── Vercel (Next.js)                                      │
│  ├── Strapi Cloud / VPS                                    │
│  └── Test Database                                         │
│                                                              │
│  Production Environment                                    │
│  ├── Vercel (Next.js) - Auto Deploy                        │
│  ├── Strapi Cloud / VPS                                    │
│  ├── Production Database                                   │
│  ├── CDN (Vercel Edge)                                     │
│  └── Monitoring & Logging                                  │
│                                                              │
│  CI/CD Pipeline                                            │
│  ├── GitHub Actions / GitLab CI                            │
│  ├── Automated Tests                                       │
│  ├── Build & Deploy                                        │
│  └── Health Checks                                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 12. Próximos Passos

1. ✅ **Diagramas criados**: Arquitetura documentada
2. ⏭️ **Validação**: Revisar com equipe técnica
3. ⏭️ **Implementação**: Seguir arquitetura definida
4. ⏭️ **Monitoramento**: Implementar observabilidade
5. ⏭️ **Otimização**: Ajustar baseado em métricas

---

**Documento criado em**: [Data]  
**Versão**: 1.0  
**Autor**: Arquiteto de Software  
**Status**: Aprovado

