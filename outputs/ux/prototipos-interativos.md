# Protótipos Interativos - Site de Marketing

## 1. Visão Geral

Este documento descreve os protótipos interativos do site de marketing, incluindo todas as interações, estados da interface, transições e feedback visual. Os protótipos foram desenvolvidos baseados nos wireframes e na pesquisa de usuário.

**Nível de Fidelidade**: Alta (pronto para desenvolvimento)  
**Ferramenta Sugerida**: Figma, Adobe XD, ou similar  
**Versão**: 1.0

---

## 2. Protótipo 1: Landing Page

### 2.1 Interações Principais

#### 2.1.1 Header Fixo
**Estado Inicial**:
- Header transparente ou com background branco
- Logo visível
- Botão CTA visível

**Interação: Scroll da Página**
- **Trigger**: Usuário rola a página para baixo
- **Ação**: Header muda para background sólido (branco)
- **Transição**: Fade in do background (200ms)
- **Sombra**: Aparece sutilmente abaixo do header
- **Comportamento**: Header permanece fixo no topo

**Interação: Hover no Botão CTA**
- **Trigger**: Mouse sobre o botão
- **Ação**: 
  - Botão escurece ligeiramente (10-15%)
  - Escala aumenta 5% (opcional)
  - Cursor muda para pointer
- **Transição**: 200ms ease-in-out

**Interação: Click no Botão CTA**
- **Trigger**: Click no botão
- **Ação**: 
  - Modal do formulário abre
  - Scroll suave até o topo (se necessário)
- **Transição**: 
  - Modal: Fade in (300ms) + Slide up (300ms)
  - Backdrop: Fade in (300ms)

---

#### 2.1.2 Hero Section
**Estado Inicial**:
- Título, subtítulo e CTA visíveis
- Imagem/ilustração visível
- Layout responsivo

**Interação: Scroll Suave**
- **Trigger**: Click em links de navegação (se houver)
- **Ação**: Scroll suave até a seção correspondente
- **Transição**: 500ms ease-in-out

**Interação: Hover no CTA**
- **Trigger**: Mouse sobre o botão
- **Ação**: Mesmo comportamento do header CTA
- **Feedback Visual**: Botão pulsa ligeiramente (opcional)

---

#### 2.1.3 Seções de Conteúdo
**Interação: Scroll Reveal**
- **Trigger**: Seção entra no viewport
- **Ação**: 
  - Elementos aparecem com fade in + slide up
  - Delay escalonado entre elementos (100ms cada)
- **Transição**: 400ms ease-out

**Interação: Hover em Cards**
- **Trigger**: Mouse sobre card (seções de problemas, benefícios)
- **Ação**: 
  - Card eleva ligeiramente (sombra aumenta)
  - Escala aumenta 2-3%
- **Transição**: 200ms ease-in-out

---

#### 2.1.4 Seção de Planos
**Interação: Hover em Card de Plano**
- **Trigger**: Mouse sobre card
- **Ação**: 
  - Card destaca (borda mais espessa ou cor diferente)
  - Botão dentro do card destaca
- **Transição**: 200ms

**Interação: Click em Botão do Plano**
- **Trigger**: Click em "Começar Grátis" ou "Assinar Premium"
- **Ação**: 
  - Abre modal do formulário
  - Pré-seleciona o plano correspondente
- **Transição**: Mesma do CTA principal

---

### 2.2 Estados da Interface

#### Estado: Carregamento Inicial
```
┌─────────────────────────────────────┐
│  [Skeleton Loader]                  │
│  - Header placeholder               │
│  - Hero section placeholder         │
│  - Seções placeholder                │
└─────────────────────────────────────┘
```
- **Quando**: Primeira carga da página
- **Duração**: Até conteúdo carregar
- **Feedback**: Skeleton loaders animados

#### Estado: Erro de Carregamento
```
┌─────────────────────────────────────┐
│  ⚠ Erro ao carregar conteúdo        │
│  [Tentar Novamente]                 │
└─────────────────────────────────────┘
```
- **Quando**: Falha ao carregar conteúdo
- **Ação**: Botão para recarregar

---

## 3. Protótipo 2: Formulário de Inscrição

### 3.1 Interações de Campos

#### 3.1.1 Campo de Texto (Nome, Email, etc.)
**Estado: Vazio**
- Campo com borda padrão (cinza claro)
- Placeholder visível (se houver)
- Label acima do campo

**Interação: Focus**
- **Trigger**: Click ou Tab no campo
- **Ação**: 
  - Borda muda para cor primária (azul)
  - Label pode mudar de cor
  - Placeholder desaparece (se houver)
- **Transição**: 200ms

**Interação: Blur (Sair do Campo)**
- **Trigger**: Click fora ou Tab para próximo campo
- **Ação**: 
  - Validação em tempo real
  - Se válido: Borda verde, check icon (opcional)
  - Se inválido: Borda vermelha, mensagem de erro
- **Transição**: 200ms

**Estado: Campo com Erro**
```
┌─────────────────────────────────────┐
│  Nome *                              │
│  [________________]                  │
│  ⚠ Nome é obrigatório                │
└─────────────────────────────────────┘
```
- Borda vermelha
- Ícone de erro (⚠)
- Mensagem de erro abaixo do campo
- Texto de erro: Vermelho, 14px

**Estado: Campo Válido**
```
┌─────────────────────────────────────┐
│  Nome *                              │
│  [João Silva________]                │
│  ✓                                   │
└─────────────────────────────────────┘
```
- Borda verde
- Ícone de sucesso (✓) - opcional
- Sem mensagem de erro

---

#### 3.1.2 Campo CEP (Busca Automática)
**Estado: Vazio**
- Campo normal
- Botão "Buscar" desabilitado

**Interação: Digitação**
- **Trigger**: Usuário digita números
- **Ação**: 
  - Aceita apenas números
  - Pode formatar automaticamente (01310-100)
  - Máximo 8 dígitos
  - Botão "Buscar" habilita quando tem 8 dígitos

**Interação: Busca Automática (8 dígitos)**
- **Trigger**: Usuário digita 8º dígito
- **Ação**: 
  - Busca automática inicia
  - Indicador de carregamento aparece
  - Botão "Buscar" mostra "Buscando..."
  - Campo CEP fica desabilitado temporariamente

**Estado: Buscando CEP**
```
┌─────────────────────────────────────┐
│  CEP *                               │
│  [01310100] [⏳ Buscando...]          │
└─────────────────────────────────────┘
```

**Interação: CEP Encontrado**
- **Trigger**: API retorna dados válidos
- **Ação**: 
  - Preenche automaticamente: logradouro, bairro, cidade, estado
  - Remove indicador de carregamento
  - Campos preenchidos ficam editáveis
  - Feedback visual positivo (borda verde nos campos)
- **Transição**: 300ms fade in

**Interação: CEP Não Encontrado**
- **Trigger**: API retorna erro ou CEP inválido
- **Ação**: 
  - Mensagem de erro: "CEP não encontrado. Preencha manualmente."
  - Campos de endereço permanecem vazios e editáveis
  - Não bloqueia envio do formulário
- **Feedback**: Mensagem amarela (warning), não vermelha (erro)

**Interação: Erro na API**
- **Trigger**: Timeout ou API indisponível
- **Ação**: 
  - Mensagem: "Não foi possível buscar o CEP. Preencha manualmente."
  - Campos permanecem editáveis
- **Feedback**: Mensagem amarela

**Interação: Busca Manual (Botão)**
- **Trigger**: Click no botão "Buscar"
- **Ação**: Mesma da busca automática
- **Quando**: Se usuário não digitou 8 dígitos ainda

---

#### 3.1.3 Seleção de Plano
**Estado: Nenhum Selecionado**
- Radio buttons ou cards sem seleção
- Plano Gratuito pode estar pré-selecionado (recomendado)

**Interação: Seleção**
- **Trigger**: Click em radio button ou card
- **Ação**: 
  - Seleção visual clara (checkmark, borda destacada, cor diferente)
  - Outro plano desmarca automaticamente
- **Transição**: 200ms

**Estado: Plano Selecionado**
```
┌─────────────────────────────────────┐
│  Plano *                             │
│  (●) Gratuito - Até 100 produtos...  │
│  ( ) Premium - Produtos ilimitados...│
└─────────────────────────────────────┘
```
- Radio button marcado ou card destacado
- Visual claro da seleção

---

### 3.2 Interações do Formulário

#### 3.2.1 Abertura do Modal
**Trigger**: Click em qualquer botão "Quero Experimentar"

**Animação**:
1. Backdrop fade in (300ms)
2. Modal fade in + slide up (300ms)
3. Foco automático no primeiro campo

**Estado Inicial do Modal**:
- Formulário vazio
- Primeiro campo com foco
- Botão "Enviar" habilitado

---

#### 3.2.2 Fechamento do Modal
**Interação: Click no X**
- **Trigger**: Click no botão de fechar (X)
- **Ação**: 
  - Modal fecha
  - Backdrop desaparece
- **Transição**: Fade out + slide down (300ms)

**Interação: Click no Backdrop**
- **Trigger**: Click fora do modal (no backdrop)
- **Ação**: Mesma do fechamento
- **Comportamento**: Não fecha se houver dados preenchidos (opcional, pode mostrar confirmação)

**Interação: Tecla ESC**
- **Trigger**: Pressionar ESC
- **Ação**: Mesma do fechamento

---

#### 3.2.3 Validação em Tempo Real
**Trigger**: Usuário sai do campo (blur)

**Processo**:
1. Valida regras do campo
2. Se inválido: Mostra erro imediatamente
3. Se válido: Remove erro (se houver)
4. Atualiza estado visual do campo

**Feedback Visual**:
- Erro: Borda vermelha + mensagem
- Válido: Borda verde (opcional) + check (opcional)
- Normal: Borda padrão

---

#### 3.2.4 Envio do Formulário
**Interação: Click em "Enviar"**

**Processo**:
1. **Validação Final**
   - Valida todos os campos
   - Se houver erros:
     - Exibe mensagens de erro
     - Foca no primeiro campo com erro
     - Scroll até o campo (se necessário)
     - Não envia

2. **Se Válido: Envio**
   - Botão "Enviar" desabilita
   - Texto muda para "Enviando..."
   - Spinner aparece
   - Todos os campos ficam desabilitados

**Estado: Enviando**
```
┌─────────────────────────────────────┐
│              [⏳ Enviando...]        │
│  (todos os campos desabilitados)     │
└─────────────────────────────────────┘
```

**Interação: Sucesso**
- **Trigger**: Backend retorna 200/201
- **Ação**: 
  - Modal fecha
  - Redireciona para página de confirmação
  - Ou mostra mensagem de sucesso no modal
- **Transição**: 300ms

**Interação: Erro**
- **Trigger**: Backend retorna erro
- **Ação**: 
  - Botão "Enviar" reabilita
  - Texto volta para "Enviar"
  - Mensagem de erro aparece no topo do formulário
  - Campos permanecem preenchidos
  - Scroll até mensagem de erro
- **Feedback**: Mensagem clara e acionável

**Estados de Erro Específicos**:
- **400 (Validação)**: "Verifique os campos marcados"
- **500 (Servidor)**: "Erro no servidor. Tente novamente mais tarde."
- **Rede**: "Erro de conexão. Verifique sua internet."
- **Timeout**: "Tempo de resposta excedido. Tente novamente."
- **Email duplicado**: "Este email já está cadastrado."

---

### 3.3 Preservação de Dados

**Comportamento**:
- Dados preenchidos são preservados após erro
- Usuário não precisa preencher novamente
- Apenas campos com erro precisam ser corrigidos

**Implementação**:
- Valores dos campos mantidos no estado
- Não limpar formulário após erro
- Focar apenas nos campos problemáticos

---

## 4. Protótipo 3: Página de Confirmação

### 4.1 Interações

#### 4.1.1 Carregamento
**Estado: Carregando**
- Skeleton loader ou spinner
- Até conteúdo carregar

**Estado: Carregado**
- Ícone de sucesso animado
- Título e mensagem visíveis
- Botões habilitados

---

#### 4.1.2 Animação de Entrada
**Trigger**: Página carrega

**Animação**:
1. Ícone de sucesso: Scale in (400ms) + bounce (opcional)
2. Título: Fade in + slide up (300ms, delay 200ms)
3. Mensagem: Fade in + slide up (300ms, delay 400ms)
4. Botão: Fade in + slide up (300ms, delay 600ms)

---

#### 4.1.3 Interações dos Botões
**Interação: Hover no Botão Principal**
- **Trigger**: Mouse sobre botão
- **Ação**: Escurece ligeiramente, escala aumenta 5%
- **Transição**: 200ms

**Interação: Click no Botão Principal**
- **Trigger**: Click em "Acessar Sistema"
- **Ação**: Redireciona para sistema ou login
- **Transição**: 300ms

**Interação: Click em Link Secundário**
- **Trigger**: Click em "Voltar para página inicial"
- **Ação**: Redireciona para landing page
- **Transição**: 300ms

---

## 5. Transições e Animações

### 5.1 Transições Globais

**Duração Padrão**: 200-300ms  
**Easing**: ease-in-out ou ease-out  
**Performance**: Usar transform e opacity (GPU accelerated)

### 5.2 Animações Específicas

#### 5.2.1 Fade In/Out
- **Propriedade**: opacity
- **Duração**: 300ms
- **Uso**: Modais, mensagens, elementos que aparecem

#### 5.2.2 Slide Up/Down
- **Propriedade**: transform: translateY()
- **Duração**: 300ms
- **Uso**: Modais, elementos que entram na tela

#### 5.2.3 Scale
- **Propriedade**: transform: scale()
- **Duração**: 200ms
- **Uso**: Hover em botões, ícones de sucesso

#### 5.2.4 Bounce
- **Propriedade**: transform: scale() com keyframes
- **Duração**: 600ms
- **Uso**: Ícone de sucesso (opcional)

---

## 6. Feedback Visual

### 6.1 Cores de Feedback

**Sucesso**:
- Cor: Verde (#10B981 ou similar)
- Uso: Campos válidos, mensagens de sucesso, ícones de confirmação

**Erro**:
- Cor: Vermelho (#EF4444 ou similar)
- Uso: Campos inválidos, mensagens de erro

**Aviso**:
- Cor: Amarelo/Laranja (#F59E0B ou similar)
- Uso: CEP não encontrado, avisos não críticos

**Info**:
- Cor: Azul (#3B82F6 ou similar)
- Uso: Informações, campos em foco

---

### 6.2 Indicadores Visuais

**Loading**:
- Spinner animado
- Skeleton loaders
- Progress bar (se aplicável)

**Validação**:
- Check verde (✓)
- X vermelho (✗)
- Ícone de alerta (⚠)

**Estados**:
- Hover: Escurece ou destaca
- Active: Pressiona ligeiramente
- Disabled: Opacidade reduzida (50%)

---

## 7. Responsividade

### 7.1 Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### 7.2 Adaptações por Dispositivo

**Mobile**:
- Modal: Full screen ou quase
- Botões: Full width
- Campos: Full width
- Espaçamento: Reduzido

**Tablet**:
- Modal: 80% da largura, centralizado
- Botões: Tamanho médio
- Layout: 2 colunas onde possível

**Desktop**:
- Modal: 600-700px de largura, centralizado
- Botões: Tamanho padrão
- Layout: Máximo de colunas

---

## 8. Acessibilidade

### 8.1 Navegação por Teclado

**Tab Order**:
1. Logo (se clicável)
2. Botão CTA header
3. Botão CTA hero
4. Campos do formulário (ordem lógica)
5. Botão "Enviar"
6. Botão fechar modal

**Indicador de Foco**:
- Borda destacada (2-3px)
- Cor contrastante
- Visível em todos os elementos

### 8.2 Leitor de Tela

**Labels**:
- Todos os campos com labels descritivos
- Labels associados aos campos (for/id)

**Mensagens**:
- Erros anunciados imediatamente
- Estados dos campos comunicados
- Mudanças de estado anunciadas

**ARIA**:
- `aria-label` em botões sem texto
- `aria-describedby` para mensagens de erro
- `aria-live` para atualizações dinâmicas
- `role` apropriados

---

## 9. Performance

### 9.1 Otimizações

**Imagens**:
- Lazy loading
- Formatos otimizados (WebP)
- Tamanhos responsivos

**Animações**:
- GPU accelerated (transform, opacity)
- Evitar animar width, height, top, left
- Reduzir animações em dispositivos lentos (prefers-reduced-motion)

**Código**:
- Code splitting
- Lazy load de componentes pesados
- Debounce em validações

---

## 10. Próximos Passos

1. ✅ **Protótipos descritos**: Todas as interações documentadas
2. ⏭️ **Protótipos visuais**: Criar em Figma/XD
3. ⏭️ **Testes**: Realizar testes de usabilidade
4. ⏭️ **Refinamento**: Ajustar baseado em feedback
5. ⏭️ **Handoff**: Preparar para desenvolvimento

---

**Documento criado em**: [Data]  
**Versão**: 1.0  
**Autor**: UX Designer  
**Status**: Aprovado

