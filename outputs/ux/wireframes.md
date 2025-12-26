# Wireframes - Site de Marketing

## 1. Visão Geral

Este documento apresenta os wireframes do site de marketing do micro SaaS de controle de estoque. Os wireframes foram criados considerando:
- Fluxo de navegação intuitivo
- Hierarquia de informação clara
- Interações do usuário
- Responsividade (mobile-first)
- Acessibilidade

**Metodologia**: Wireframes em baixa fidelidade, focados em estrutura e fluxo  
**Ferramenta**: Descrição textual detalhada (pode ser convertida para visual)  
**Versão**: 1.0

---

## 2. Estrutura Geral do Site

```
┌─────────────────────────────────────┐
│         HEADER (fixo)               │
│  [Logo]              [CTA Button]   │
├─────────────────────────────────────┤
│                                     │
│      HERO SECTION                  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SEÇÃO: PROBLEMAS                  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SEÇÃO: SOLUÇÃO                    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SEÇÃO: BENEFÍCIOS                 │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SEÇÃO: PLANOS                     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SEÇÃO: CTA FINAL                  │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

---

## 3. Wireframe 1: Landing Page - Desktop

### 3.1 Header (Fixo no Topo)

```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO] Estoque Roupas                    [Quero Experimentar]│
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Logo à esquerda (clique volta ao topo)
- Botão CTA à direita (cor destacada, tamanho médio)
- Altura: 60-70px
- Background: Branco ou transparente
- Sombra sutil quando scroll

**Comportamento**:
- Fixo no topo durante scroll
- Botão sempre visível
- Hover effect no botão

---

### 3.2 Hero Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│              [Imagem/Ilustração]                             │
│                                                               │
│     Controle de Estoque Simples                              │
│     para Lojas de Roupas                                     │
│                                                               │
│     Gerencie seu estoque com facilidade,                     │
│     evite perdas e aumente suas vendas                       │
│                                                               │
│           [Quero Experimentar]                                │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Título principal: H1, 48-56px, negrito
- Subtítulo: 20-24px, cor mais suave
- CTA: Botão grande, cor destacada, 16-18px
- Imagem/Ilustração: Lado direito ou centralizada
- Altura: 600-700px (viewport)

**Hierarquia**:
1. Título (maior destaque)
2. Subtítulo (contexto)
3. CTA (ação)
4. Visual (apoio)

**Espaçamento**:
- Padding vertical: 80-100px
- Padding horizontal: 120px
- Espaçamento entre elementos: 24-32px

---

### 3.3 Seção: Problemas

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│     Você já passou por isso?                                 │
│                                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │   [Ícone] │  │   [Ícone] │  │   [Ícone] │                   │
│  │           │  │           │  │           │                   │
│  │ Estoque   │  │ Produtos  │  │ Processos │                   │
│  │ Desorg.   │  │ Parados   │  │ Manuais   │                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Título: H2, 36-40px
- 3 cards com problemas comuns
- Ícones ilustrativos
- Texto breve em cada card

**Layout**:
- Grid de 3 colunas (desktop)
- Espaçamento entre cards: 32px
- Altura dos cards: ~200px

---

### 3.4 Seção: Solução

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│     A Solução para sua Loja                                  │
│                                                               │
│  [Imagem/Ilustração do produto]                              │
│                                                               │
│  • Controle de estoque por variação (tamanho e cor)          │
│  • Aviso de estoque baixo                                     │
│  • Bloqueio de venda quando zerar                            │
│  • Venda rápida (atualiza estoque automaticamente)           │
│  • Relatórios básicos                                         │
│  • E muito mais...                                            │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Título: H2
- Lista de funcionalidades principais
- Visual do produto (screenshot ou ilustração)
- Layout: 2 colunas (texto + visual)

---

### 3.5 Seção: Benefícios

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│     Por que escolher nosso sistema?                          │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐                         │
│  │ [Ícone]      │  │ [Ícone]      │                         │
│  │ Economia     │  │ Aumento      │                         │
│  │ de Tempo    │  │ de Vendas    │                         │
│  └──────────────┘  └──────────────┘                         │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐                         │
│  │ [Ícone]      │  │ [Ícone]      │                         │
│  │ Redução      │  │ Controle     │                         │
│  │ de Perdas    │  │ Total        │                         │
│  └──────────────┘  └──────────────┘                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Título: H2
- Grid de 2x2 com benefícios
- Ícones + título + descrição breve
- Cores diferentes para cada card (opcional)

---

### 3.6 Seção: Planos

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│     Escolha seu Plano                                        │
│                                                               │
│  ┌──────────────────┐  ┌──────────────────┐                 │
│  │   GRATUITO       │  │   PREMIUM        │                 │
│  │                  │  │                  │                 │
│  │ ✓ Até 100        │  │ ✓ Produtos      │                 │
│  │   produtos       │  │   ilimitados     │                 │
│  │                  │  │                  │                 │
│  │ ✗ Sem multi-     │  │ ✓ Multi-usuário  │                 │
│  │   usuário        │  │                  │                 │
│  │                  │  │                  │                 │
│  │ [Começar Grátis] │  │ [Assinar Premium] │                 │
│  └──────────────────┘  └──────────────────┘                 │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Título: H2
- 2 cards lado a lado (Gratuito e Premium)
- Lista de features com checkmarks
- Botão de ação em cada card
- Destaque visual no plano Premium (opcional)

**Layout**:
- Grid de 2 colunas
- Cards com mesma altura
- Espaçamento: 40px entre cards

---

### 3.7 Seção: CTA Final

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│     Pronto para começar?                                     │
│                                                               │
│     Experimente grátis agora mesmo                          │
│                                                               │
│           [Quero Experimentar]                              │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Título: H2
- Subtítulo: Texto motivacional
- CTA: Botão grande e destacado
- Background: Cor diferente (destaque)

---

### 3.8 Footer

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                                                       │
│                                                               │
│  Links Úteis          Contato          Redes Sociais        │
│  • Sobre              • Email           [Ícones]             │
│  • Funcionalidades    • Telefone                             │
│  • Planos                                                    │
│                                                               │
│  © 2024 Estoque Roupas. Todos os direitos reservados.      │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Logo
- Links organizados em colunas
- Informações de contato
- Redes sociais
- Copyright

---

## 4. Wireframe 2: Formulário de Inscrição - Desktop

### 4.1 Modal/Overlay do Formulário

```
┌─────────────────────────────────────────────────────────────┐
│  [X] Fechar                                                   │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                       │   │
│  │  Crie sua conta                                      │   │
│  │                                                       │   │
│  │  Nome *                                               │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Email *                                              │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Nome da Loja *                                       │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Quantos Funcionários *                               │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Endereço                                             │   │
│  │  CEP *                                                │   │
│  │  [___________] [Buscar]                               │   │
│  │                                                       │   │
│  │  Logradouro *                                         │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Bairro *                                             │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Cidade *                                             │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Estado *                                             │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Complemento (opcional)                               │   │
│  │  [___________________________]                        │   │
│  │                                                       │   │
│  │  Plano *                                               │   │
│  │  ( ) Gratuito - Até 100 produtos, sem multi-usuário  │   │
│  │  ( ) Premium - Produtos ilimitados, multi-usuário   │   │
│  │                                                       │   │
│  │              [Enviar Cadastro]                        │   │
│  │                                                       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Overlay escuro (backdrop)
- Modal centralizado
- Botão de fechar (X) no canto superior direito
- Título do formulário
- Campos organizados verticalmente
- Labels acima dos campos
- Asterisco (*) para campos obrigatórios
- Botão de envio no final

**Comportamento**:
- Modal pode ser fechado clicando no X ou no overlay
- Scroll interno se formulário for muito longo
- Validação em tempo real (mensagens aparecem abaixo dos campos)

---

### 4.2 Estados do Formulário

#### Estado: Campo com Erro
```
┌─────────────────────────────────────┐
│  Nome *                             │
│  [___________________________]     │
│  ⚠ Nome é obrigatório               │
└─────────────────────────────────────┘
```

#### Estado: Campo Válido
```
┌─────────────────────────────────────┐
│  Nome *                             │
│  [João Silva________________]      │
│  ✓                                   │
└─────────────────────────────────────┘
```

#### Estado: Buscando CEP
```
┌─────────────────────────────────────┐
│  CEP *                              │
│  [01310100____] [⏳ Buscando...]    │
└─────────────────────────────────────┘
```

#### Estado: Enviando
```
┌─────────────────────────────────────┐
│              [⏳ Enviando...]        │
│  (botão desabilitado)               │
└─────────────────────────────────────┘
```

---

## 5. Wireframe 3: Landing Page - Mobile

### 5.1 Header Mobile

```
┌─────────────────────────┐
│ [☰] [Logo]  [CTA]       │
└─────────────────────────┘
```

**Elementos**:
- Menu hambúrguer (opcional)
- Logo centralizado ou à esquerda
- CTA compacto à direita

---

### 5.2 Hero Section Mobile

```
┌─────────────────────────┐
│                         │
│   [Imagem/Ilustração]   │
│                         │
│  Controle de Estoque    │
│  Simples para Lojas     │
│  de Roupas             │
│                         │
│  Gerencie seu estoque   │
│  com facilidade         │
│                         │
│  [Quero Experimentar]  │
│                         │
└─────────────────────────┘
```

**Ajustes para Mobile**:
- Título: 32-36px (menor que desktop)
- Subtítulo: 16-18px
- Imagem: Full width ou removida
- CTA: Full width ou quase
- Padding reduzido: 40-60px

---

### 5.3 Seções Mobile

Todas as seções seguem o mesmo padrão:
- **Grid**: 1 coluna (stack vertical)
- **Cards**: Full width
- **Espaçamento**: Reduzido (24-32px entre seções)
- **Texto**: Tamanhos reduzidos proporcionalmente

**Exemplo: Seção de Problemas Mobile**
```
┌─────────────────────────┐
│                         │
│ Você já passou por      │
│ isso?                   │
│                         │
│ ┌───────────────────┐  │
│ │   [Ícone]         │  │
│ │   Estoque         │  │
│ │   Desorganizado   │  │
│ └───────────────────┘  │
│                         │
│ ┌───────────────────┐  │
│ │   [Ícone]         │  │
│ │   Produtos        │  │
│ │   Parados         │  │
│ └───────────────────┘  │
│                         │
└─────────────────────────┘
```

---

### 5.4 Formulário Mobile

```
┌─────────────────────────┐
│ [X]                      │
│                          │
│ Crie sua conta           │
│                          │
│ Nome *                   │
│ [________________]       │
│                          │
│ Email *                  │
│ [________________]       │
│                          │
│ Nome da Loja *           │
│ [________________]       │
│                          │
│ Quantos Funcionários *   │
│ [________________]       │
│                          │
│ Endereço                 │
│ CEP *                    │
│ [________] [Buscar]      │
│                          │
│ Logradouro *             │
│ [________________]       │
│                          │
│ ... (outros campos)      │
│                          │
│ Plano *                  │
│ ( ) Gratuito             │
│ ( ) Premium              │
│                          │
│ [Enviar Cadastro]        │
│                          │
└─────────────────────────┘
```

**Ajustes para Mobile**:
- Modal: Full screen ou quase
- Campos: Full width
- Botões: Full width
- Espaçamento: 16-20px entre campos
- Scroll interno se necessário

---

## 6. Wireframe 4: Página de Confirmação

### 6.1 Desktop

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│              [Ícone de Sucesso ✓]                           │
│                                                               │
│          Cadastro realizado com sucesso!                     │
│                                                               │
│     Obrigado por se cadastrar! Em breve você receberá       │
│     um email com instruções para acessar sua conta.          │
│                                                               │
│              [Acessar Sistema]                               │
│                                                               │
│     Ou volte para a página inicial                          │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Elementos**:
- Ícone de sucesso (grande, verde)
- Título de confirmação
- Mensagem explicativa
- Botão de ação principal
- Link secundário (voltar)

---

### 6.2 Mobile

```
┌─────────────────────────┐
│                         │
│    [Ícone ✓]            │
│                         │
│  Cadastro realizado     │
│  com sucesso!           │
│                         │
│  Obrigado por se        │
│  cadastrar! Em breve    │
│  você receberá um       │
│  email com instruções.  │
│                         │
│  [Acessar Sistema]      │
│                         │
└─────────────────────────┘
```

---

## 7. Fluxo de Navegação

### 7.1 Fluxo Principal

```
Landing Page
    │
    ├─> Scroll pelas seções
    │
    └─> Clica em "Quero Experimentar"
            │
            └─> Abre Formulário (Modal)
                    │
                    ├─> Preenche campos
                    │
                    ├─> Busca CEP (opcional)
                    │
                    ├─> Seleciona plano
                    │
                    └─> Clica em "Enviar"
                            │
                            └─> Página de Confirmação
```

### 7.2 Fluxo Alternativo

```
Landing Page
    │
    └─> Clica em "Quero Experimentar" (footer)
            │
            └─> Scroll até topo + Abre Formulário
```

---

## 8. Anotações de Interação

### 8.1 Botão "Quero Experimentar"
- **Hover**: Escurece ou aumenta ligeiramente
- **Click**: Abre modal com formulário
- **Animação**: Fade in do modal (300ms)

### 8.2 Formulário
- **Validação**: Ao sair do campo (blur)
- **Mensagem de erro**: Aparece abaixo do campo, cor vermelha
- **Campo válido**: Check verde (opcional)
- **Busca CEP**: Ao digitar 8 dígitos ou ao sair do campo
- **Envio**: Botão desabilita durante envio, mostra spinner

### 8.3 Modal
- **Abertura**: Fade in + slide up
- **Fechamento**: Fade out + slide down
- **Backdrop**: Clicável para fechar
- **ESC**: Fecha modal

---

## 9. Considerações de Acessibilidade

### 9.1 Navegação por Teclado
- Todos os elementos interativos devem ser focáveis
- Ordem de tab: Lógica e intuitiva
- Indicador de foco visível

### 9.2 Leitor de Tela
- Labels descritivos em todos os campos
- Mensagens de erro anunciadas
- Estados dos campos comunicados

### 9.3 Contraste
- Texto vs background: Mínimo 4.5:1
- Botões: Contraste adequado
- Links: Diferentes do texto normal

---

## 10. Próximos Passos

1. ✅ **Wireframes criados**: Estrutura e fluxo definidos
2. ⏭️ **Validação**: Revisar com equipe e stakeholders
3. ⏭️ **Protótipos**: Criar protótipos interativos baseados nos wireframes
4. ⏭️ **Testes**: Realizar testes de usabilidade
5. ⏭️ **Refinamento**: Ajustar baseado em feedback

---

**Documento criado em**: [Data]  
**Versão**: 1.0  
**Autor**: UX Designer  
**Status**: Aprovado

