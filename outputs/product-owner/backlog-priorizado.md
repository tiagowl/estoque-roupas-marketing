# Backlog Priorizado - Site de Marketing

## Metodologia de Priorização

A priorização foi realizada considerando:
- **Valor de Negócio**: Impacto direto na captação de clientes
- **Esforço de Desenvolvimento**: Complexidade técnica e tempo estimado
- **Dependências**: Features que bloqueiam outras funcionalidades
- **Riscos**: Impacto de não entregar a feature

### Escala de Prioridade
- **🔴 Crítica (P0)**: Bloqueia outras features ou é essencial para MVP
- **🟠 Alta (P1)**: Importante para melhorar experiência
- **🟡 Média (P2)**: Nice to have, pode ser entregue depois

### Escala de Esforço
- **S (Small)**: 1-3 dias
- **M (Medium)**: 4-8 dias
- **L (Large)**: 9-15 dias

---

## Sprint 1 - MVP Mínimo (Fundação)

### 🔴 P0 - Críticas (Must Have)

#### US-001: Visualizar Landing Page com Proposta de Valor
- **Prioridade**: 🔴 Crítica
- **Esforço**: M (5-7 dias)
- **Dependências**: Nenhuma
- **Valor**: Alto - Primeiro contato com produto
- **Riscos**: Baixo - Página estática/marketing
- **Justificativa**: Ponto de entrada do produto, essencial para conversão. Sem landing page, não há como captar leads.

**Tarefas**:
- Criar estrutura Next.js
- Desenvolver componentes de hero section
- Criar seções de benefícios
- Implementar design responsivo
- Otimizar performance e SEO

---

#### US-002: Solicitar Experimentação do Produto
- **Prioridade**: 🔴 Crítica
- **Esforço**: S (1-2 dias)
- **Dependências**: US-001
- **Valor**: Alto - Conversão de visitante em lead
- **Riscos**: Baixo - Botão simples
- **Justificativa**: CTA principal que converte visitantes em leads. Sem botão, não há como iniciar cadastro.

**Tarefas**:
- Criar componente de botão CTA
- Implementar ação de clique (abrir formulário)
- Adicionar animações/transições
- Testar acessibilidade

---

#### US-003: Preencher Formulário de Inscrição
- **Prioridade**: 🔴 Crítica
- **Esforço**: M (5-6 dias)
- **Dependências**: US-002
- **Valor**: Alto - Captação de leads
- **Riscos**: Baixo - Formulário padrão com validações
- **Justificativa**: Essencial para captar usuários e iniciar o funil de conversão. Sem formulário, não há como coletar dados.

**Tarefas**:
- Criar estrutura do formulário
- Implementar campos: Nome, Email, Nome da Loja, Quantos Funcionários
- Implementar validações em tempo real
- Criar mensagens de erro claras
- Implementar acessibilidade (ARIA, navegação por teclado)
- Testar em diferentes navegadores

---

#### US-005: Selecionar Plano (Gratuito ou Premium)
- **Prioridade**: 🔴 Crítica
- **Esforço**: S (1-2 dias)
- **Dependências**: US-003
- **Valor**: Alto - Define modelo de negócio
- **Riscos**: Baixo - Seleção simples
- **Justificativa**: Essencial para segmentação de usuários e modelo de negócio. Sem seleção de plano, não há como diferenciar ofertas.

**Tarefas**:
- Criar componente de seleção de plano
- Implementar radio buttons ou cards selecionáveis
- Adicionar descrições de cada plano
- Implementar validação obrigatória

---

#### US-006: Enviar Dados do Formulário para Backend
- **Prioridade**: 🔴 Crítica
- **Esforço**: M (4-5 dias)
- **Dependências**: US-003, US-005
- **Valor**: Crítico - Base para todo o sistema
- **Riscos**: Médio - Integração com Strapi 5
- **Justificativa**: Sem backend funcionando, nenhuma outra feature pode ser desenvolvida. Base para persistência de dados.

**Tarefas**:
- Configurar integração com Strapi 5
- Criar estrutura de dados para envio
- Implementar função de envio (fetch/axios)
- Tratar respostas de sucesso
- Implementar tratamento de erros (rede, timeout, validação, servidor)
- Adicionar indicadores de carregamento
- Prevenir envios duplicados

---

## Sprint 2 - Melhorias de UX

### 🟠 P1 - Alta Prioridade (Should Have)

#### US-004: Buscar Endereço por CEP
- **Prioridade**: 🟠 Alta
- **Esforço**: M (3-4 dias)
- **Dependências**: US-003
- **Valor**: Médio - Melhora experiência do usuário
- **Riscos**: Baixo - Integração com API pública
- **Justificativa**: Melhora significativamente a experiência do usuário, reduz tempo de preenchimento e erros. Não bloqueia outras features, mas agrega muito valor.

**Tarefas**:
- Integrar com API de CEP (ViaCEP ou BrasilAPI)
- Criar campo CEP no formulário
- Implementar busca automática ao digitar 8 dígitos
- Implementar busca ao sair do campo (blur)
- Preencher campos automaticamente (logradouro, bairro, cidade, estado)
- Tratar erros (CEP não encontrado, timeout, API indisponível)
- Adicionar indicador de carregamento
- Permitir edição manual após preenchimento automático

---

#### US-007: Visualizar Confirmação de Cadastro
- **Prioridade**: 🟠 Alta
- **Esforço**: S (1 dia)
- **Dependências**: US-006
- **Valor**: Médio - Melhora experiência, reduz ansiedade
- **Riscos**: Baixo - Página simples
- **Justificativa**: Feedback positivo após ação do usuário melhora experiência e confiança. Não é crítica, mas importante para UX.

**Tarefas**:
- Criar página/componente de confirmação
- Implementar mensagem de sucesso
- Adicionar informações de próximos passos
- Criar botão/link para acessar sistema
- Implementar design positivo e encorajador

---

## Roadmap Visual

```
Sprint 1 (MVP - 2 semanas)
├── 🔴 US-001: Landing Page (5-7 dias)
├── 🔴 US-002: Botão CTA (1-2 dias)
├── 🔴 US-003: Formulário (5-6 dias)
├── 🔴 US-005: Seleção de Plano (1-2 dias)
└── 🔴 US-006: Envio Backend (4-5 dias)
    Total: ~16-22 dias

Sprint 2 (Melhorias - 1 semana)
├── 🟠 US-004: Busca CEP (3-4 dias)
└── 🟠 US-007: Confirmação (1 dia)
    Total: ~4-5 dias
```

---

## Matriz de Priorização (RICE Score)

| User Story | Reach | Impact | Confidence | Effort | RICE Score | Prioridade |
|------------|-------|--------|------------|--------|------------|------------|
| US-006 | 100% | 3 | 85% | 5 | 51.0 | 🔴 P0 |
| US-003 | 100% | 3 | 90% | 6 | 45.0 | 🔴 P0 |
| US-001 | 100% | 3 | 95% | 7 | 40.7 | 🔴 P0 |
| US-002 | 100% | 3 | 95% | 2 | 142.5 | 🔴 P0 |
| US-005 | 100% | 3 | 95% | 2 | 142.5 | 🔴 P0 |
| US-004 | 100% | 2 | 90% | 4 | 45.0 | 🟠 P1 |
| US-007 | 100% | 2 | 95% | 1 | 190.0 | 🟠 P1 |

*Nota: RICE Score = (Reach × Impact × Confidence) / Effort*

**Legenda**:
- **Reach**: % de usuários impactados (100% = todos)
- **Impact**: 3 (Alto), 2 (Médio), 1 (Baixo)
- **Confidence**: % de certeza nas estimativas
- **Effort**: Dias de desenvolvimento

---

## Dependências Críticas

### Cadeia de Dependências Principal
```
US-001 (Landing Page)
  └─> US-002 (Botão CTA)
      └─> US-003 (Formulário)
          ├─> US-004 (Busca CEP) [opcional, não bloqueia]
          ├─> US-005 (Seleção Plano)
          └─> US-006 (Envio Backend)
              └─> US-007 (Confirmação)
```

### Bloqueadores
- **US-001**: Bloqueia US-002 (botão precisa estar na landing page)
- **US-002**: Bloqueia US-003 (formulário é aberto pelo botão)
- **US-003**: Bloqueia US-004, US-005, US-006 (todos dependem do formulário)
- **US-006**: Bloqueia US-007 (confirmação só aparece após envio bem-sucedido)

### Dependências Não-Bloqueadoras
- **US-004**: Não bloqueia outras features, pode ser desenvolvida em paralelo ou depois
- **US-007**: Não bloqueia outras features, mas depende de US-006

---

## Riscos e Mitigações

### Riscos Técnicos

#### 1. Integração com Strapi 5
**Risco**: Nova versão pode ter breaking changes ou documentação incompleta  
**Impacto**: Alto - Bloqueia envio de formulário  
**Probabilidade**: Média  
**Mitigação**:
- Pesquisar documentação do Strapi 5 antes de começar
- Criar POC (Proof of Concept) de integração primeiro
- Ter plano B (Strapi 4) se necessário
- Testar extensivamente a integração

#### 2. API de CEP Indisponível
**Risco**: API pública pode estar fora do ar  
**Impacto**: Baixo - Não bloqueia cadastro, apenas UX  
**Probabilidade**: Baixa  
**Mitigação**:
- Usar API confiável (ViaCEP ou BrasilAPI)
- Implementar fallback (permitir preenchimento manual)
- Tratar erros graciosamente
- Considerar ter API backup

#### 3. Performance da Landing Page
**Risco**: Página lenta pode afetar conversão  
**Impacto**: Médio - Afeta SEO e experiência  
**Probabilidade**: Baixa  
**Mitigação**:
- Otimizar imagens (WebP, lazy loading)
- Usar Next.js Image component
- Implementar code splitting
- Monitorar performance (Lighthouse)

### Riscos de Negócio

#### 1. Formulário Muito Longo
**Risco**: Pode causar abandono  
**Impacto**: Alto - Perda de leads  
**Probabilidade**: Média  
**Mitigação**:
- Manter formulário enxuto (apenas campos essenciais)
- Usar validação em tempo real para feedback imediato
- Implementar busca de CEP para reduzir esforço
- Testar com usuários reais

#### 2. Falta de Clareza nos Planos
**Risco**: Usuários podem não entender diferença  
**Impacto**: Médio - Pode afetar escolha de plano  
**Probabilidade**: Baixa  
**Mitigação**:
- Descrições claras e objetivas
- Pode adicionar tooltips ou seção explicativa
- Testar com usuários

---

## Métricas de Sucesso

### MVP (Sprint 1)
- ✅ Landing page carrega em menos de 3 segundos
- ✅ Botão CTA visível e funcional
- ✅ Formulário completo e validado
- ✅ Dados enviados com sucesso para Strapi 5
- ✅ Taxa de conversão (visitante → lead) > 2%

### Versão Completa (Sprint 1 + 2)
- ✅ Busca de CEP funcionando
- ✅ Confirmação de cadastro exibida
- ✅ Taxa de abandono do formulário < 30%
- ✅ Taxa de erro no envio < 5%

---

## Observações Finais

1. **MVP Focado**: Sprint 1 contém apenas o essencial para captar leads
2. **Iteração Rápida**: Entregar MVP em 2 semanas, melhorias na semana seguinte
3. **Feedback Contínuo**: Validar com usuários após cada sprint
4. **Flexibilidade**: Backlog pode ser ajustado baseado em feedback

**Total Estimado MVP**: ~16-22 dias de desenvolvimento  
**Total Estimado Completo**: ~20-27 dias de desenvolvimento

---

## Próximos Passos Após MVP

Após concluir o site de marketing, as próximas features seriam:
- Funcionalidades do SaaS (CRUD produtos, controle de estoque, etc.)
- Sistema de autenticação
- Dashboard do usuário
- Funcionalidades específicas de cada plano

*Nota: Essas features não fazem parte do escopo do site de marketing.*

