# Design System - Site de Marketing

## 1. Visão Geral

Este documento define o Design System completo para o site de marketing do micro SaaS de controle de estoque. O design system estabelece padrões visuais, componentes reutilizáveis e diretrizes de uso para garantir consistência e qualidade em toda a aplicação.

**Versão**: 1.0  
**Última Atualização**: [Data]  
**Status**: Ativo

---

## 2. Princípios de Design

### 2.1 Simplicidade
O design deve ser simples e direto, evitando complexidade desnecessária. Priorizamos clareza sobre ornamentação.

### 2.2 Confiança
O design deve transmitir confiança e profissionalismo, essenciais para um produto B2B.

### 2.3 Acessibilidade
O design deve ser acessível para todos os usuários, seguindo WCAG 2.1 AA.

### 2.4 Performance
O design deve priorizar performance, garantindo carregamento rápido e interações fluidas.

### 2.5 Responsividade
O design deve funcionar perfeitamente em todos os dispositivos, com foco em mobile-first.

---

## 3. Cores

### 3.1 Paleta Principal

#### Primária
- **Azul Principal**: `#3B82F6`
  - Uso: Botões principais, links, elementos de destaque
  - RGB: (59, 130, 246)
  - HSL: (217, 91%, 60%)

- **Azul Escuro**: `#1E40AF`
  - Uso: Hover em botões, estados ativos
  - RGB: (30, 64, 175)
  - HSL: (224, 84%, 39%)

- **Azul Claro**: `#DBEAFE`
  - Uso: Backgrounds sutis, highlights
  - RGB: (219, 234, 254)
  - HSL: (214, 100%, 93%)

#### Secundária
- **Verde**: `#10B981`
  - Uso: Sucesso, validação positiva, confirmações
  - RGB: (16, 185, 129)
  - HSL: (160, 84%, 39%)

- **Vermelho**: `#EF4444`
  - Uso: Erros, alertas críticos, validação negativa
  - RGB: (239, 68, 68)
  - HSL: (0, 84%, 60%)

- **Amarelo**: `#F59E0B`
  - Uso: Avisos, alertas não críticos
  - RGB: (245, 158, 11)
  - HSL: (38, 92%, 50%)

#### Neutras
- **Preto**: `#111827`
  - Uso: Textos principais, títulos
  - RGB: (17, 24, 39)

- **Cinza Escuro**: `#374151`
  - Uso: Textos secundários
  - RGB: (55, 65, 81)

- **Cinza Médio**: `#6B7280`
  - Uso: Textos terciários, placeholders
  - RGB: (107, 114, 128)

- **Cinza Claro**: `#E5E7EB`
  - Uso: Bordas, divisores
  - RGB: (229, 231, 235)

- **Cinza Muito Claro**: `#F9FAFB`
  - Uso: Backgrounds, seções alternadas
  - RGB: (249, 250, 251)

- **Branco**: `#FFFFFF`
  - Uso: Backgrounds, textos sobre cores escuras
  - RGB: (255, 255, 255)

---

### 3.2 Uso de Cores por Contexto

#### Sucesso
- **Principal**: Verde `#10B981`
- **Background**: Verde claro `#D1FAE5`
- **Texto**: Verde escuro `#065F46`

#### Erro
- **Principal**: Vermelho `#EF4444`
- **Background**: Vermelho claro `#FEE2E2`
- **Texto**: Vermelho escuro `#991B1B`

#### Aviso
- **Principal**: Amarelo `#F59E0B`
- **Background**: Amarelo claro `#FEF3C7`
- **Texto**: Amarelo escuro `#92400E`

#### Info
- **Principal**: Azul `#3B82F6`
- **Background**: Azul claro `#DBEAFE`
- **Texto**: Azul escuro `#1E3A8A`

---

## 4. Tipografia

### 4.1 Família de Fontes

**Primária**: Inter ou sistema sans-serif
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Uso**: Todo o site
- **Razão**: Legibilidade, modernidade, suporte amplo

---

### 4.2 Escala Tipográfica

#### Títulos

**H1 - Título Principal**
- Tamanho: 48px (desktop) / 32px (mobile)
- Peso: 700 (Bold)
- Line height: 1.2
- Uso: Hero section, títulos principais

**H2 - Título de Seção**
- Tamanho: 36px (desktop) / 28px (mobile)
- Peso: 700 (Bold)
- Line height: 1.3
- Uso: Títulos de seções principais

**H3 - Subtítulo**
- Tamanho: 24px (desktop) / 20px (mobile)
- Peso: 600 (Semi-bold)
- Line height: 1.4
- Uso: Subtítulos, títulos de cards

**H4 - Título Pequeno**
- Tamanho: 20px (desktop) / 18px (mobile)
- Peso: 600 (Semi-bold)
- Line height: 1.4
- Uso: Títulos de elementos menores

#### Textos

**Body Large**
- Tamanho: 18px
- Peso: 400 (Regular)
- Line height: 1.6
- Uso: Textos importantes, hero section

**Body**
- Tamanho: 16px
- Peso: 400 (Regular)
- Line height: 1.6
- Uso: Texto padrão do site

**Body Small**
- Tamanho: 14px
- Peso: 400 (Regular)
- Line height: 1.5
- Uso: Textos secundários, labels

**Caption**
- Tamanho: 12px
- Peso: 400 (Regular)
- Line height: 1.4
- Uso: Notas, copyright, textos muito pequenos

---

### 4.3 Hierarquia Tipográfica

```
H1 (48px) - Título Principal
  └─> H2 (36px) - Seção
      └─> H3 (24px) - Subtítulo
          └─> Body (16px) - Texto
              └─> Body Small (14px) - Texto Secundário
                  └─> Caption (12px) - Nota
```

---

## 5. Espaçamento

### 5.1 Sistema de Espaçamento

Baseado em múltiplos de 4px:

- **4px** (0.25rem): Espaçamento muito pequeno
- **8px** (0.5rem): Espaçamento pequeno
- **12px** (0.75rem): Espaçamento pequeno-médio
- **16px** (1rem): Espaçamento padrão
- **24px** (1.5rem): Espaçamento médio
- **32px** (2rem): Espaçamento grande
- **40px** (2.5rem): Espaçamento muito grande
- **48px** (3rem): Espaçamento extra grande
- **64px** (4rem): Espaçamento entre seções
- **80px** (5rem): Espaçamento entre seções grandes

---

### 5.2 Uso de Espaçamento

#### Padding
- **Componentes pequenos**: 12-16px
- **Componentes médios**: 16-24px
- **Componentes grandes**: 24-32px
- **Seções**: 64-80px (vertical)

#### Margin
- **Entre elementos relacionados**: 8-16px
- **Entre elementos não relacionados**: 24-32px
- **Entre seções**: 64-80px

#### Gap (Grid/Flex)
- **Grid pequeno**: 16px
- **Grid médio**: 24px
- **Grid grande**: 32px

---

## 6. Componentes

### 6.1 Botões

#### Botão Primário
```css
Background: #3B82F6 (Azul)
Text: #FFFFFF (Branco)
Padding: 12px 24px
Border-radius: 8px
Font-size: 16px
Font-weight: 600
```

**Estados**:
- **Hover**: Background `#1E40AF` (Azul escuro)
- **Active**: Background `#1E3A8A` (Azul mais escuro)
- **Disabled**: Opacity 50%, cursor not-allowed

**Uso**: CTAs principais, ações primárias

---

#### Botão Secundário
```css
Background: Transparent
Text: #3B82F6 (Azul)
Border: 2px solid #3B82F6
Padding: 12px 24px
Border-radius: 8px
Font-size: 16px
Font-weight: 600
```

**Estados**:
- **Hover**: Background `#DBEAFE` (Azul claro)
- **Active**: Background `#BFDBFE`
- **Disabled**: Opacity 50%

**Uso**: Ações secundárias, links destacados

---

#### Botão Texto
```css
Background: Transparent
Text: #3B82F6 (Azul)
Padding: 8px 16px
Border-radius: 4px
Font-size: 16px
Font-weight: 500
```

**Estados**:
- **Hover**: Background `#F3F4F6` (Cinza muito claro)
- **Active**: Background `#E5E7EB`

**Uso**: Ações terciárias, links

---

#### Tamanhos de Botão

**Small**
- Padding: 8px 16px
- Font-size: 14px

**Medium** (Padrão)
- Padding: 12px 24px
- Font-size: 16px

**Large**
- Padding: 16px 32px
- Font-size: 18px

---

### 6.2 Inputs

#### Input Padrão
```css
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border-radius: 8px
Padding: 12px 16px
Font-size: 16px
Color: #111827
```

**Estados**:
- **Focus**: Border `#3B82F6`, outline `2px solid #DBEAFE`
- **Error**: Border `#EF4444`, background `#FEE2E2`
- **Success**: Border `#10B981`, background `#D1FAE5`
- **Disabled**: Background `#F9FAFB`, opacity 50%

**Label**:
- Font-size: 14px
- Font-weight: 500
- Color: `#374151`
- Margin-bottom: 8px

**Placeholder**:
- Color: `#6B7280`

**Mensagem de Erro**:
- Font-size: 14px
- Color: `#EF4444`
- Margin-top: 4px

---

### 6.3 Cards

#### Card Padrão
```css
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border-radius: 12px
Padding: 24px
Box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
```

**Estados**:
- **Hover**: Box-shadow `0 4px 6px rgba(0, 0, 0, 0.1)`, transform `translateY(-2px)`

**Uso**: Seções de conteúdo, features, planos

---

#### Card de Plano
```css
Background: #FFFFFF
Border: 2px solid #E5E7EB
Border-radius: 12px
Padding: 32px
Box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
```

**Estado Selecionado**:
- Border: `2px solid #3B82F6`
- Background: `#F0F9FF` (Azul muito claro)

**Uso**: Seleção de planos

---

### 6.4 Modal

#### Overlay
```css
Background: rgba(0, 0, 0, 0.5)
Position: fixed
Z-index: 1000
```

#### Modal
```css
Background: #FFFFFF
Border-radius: 12px
Padding: 32px
Max-width: 600px
Width: 90%
Box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15)
```

**Botão Fechar**:
- Position: absolute top-right
- Padding: 8px
- Color: `#6B7280`
- Hover: Color `#111827`

---

### 6.5 Badges

#### Badge Sucesso
```css
Background: #D1FAE5
Color: #065F46
Padding: 4px 12px
Border-radius: 12px
Font-size: 12px
Font-weight: 600
```

#### Badge Erro
```css
Background: #FEE2E2
Color: #991B1B
Padding: 4px 12px
Border-radius: 12px
Font-size: 12px
Font-weight: 600
```

#### Badge Info
```css
Background: #DBEAFE
Color: #1E3A8A
Padding: 4px 12px
Border-radius: 12px
Font-size: 12px
Font-weight: 600
```

---

## 7. Ícones

### 7.1 Biblioteca de Ícones

**Recomendação**: Heroicons ou Lucide Icons

**Tamanhos**:
- **Small**: 16px
- **Medium**: 20px (padrão)
- **Large**: 24px
- **XLarge**: 32px

**Cores**:
- Seguir paleta de cores do design system
- Usar cor do contexto (sucesso, erro, etc.)

---

### 7.2 Ícones Comuns

- **Check**: Sucesso, validação
- **X**: Erro, fechar
- **Alert**: Aviso
- **Info**: Informação
- **Loading**: Carregamento
- **Search**: Busca
- **Arrow Right**: Próximo, continuar

---

## 8. Sombras

### 8.1 Sistema de Sombras

**Small**
```css
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
```

**Medium** (Padrão)
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
```

**Large**
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```

**XLarge**
```css
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
```

**Modal**
```css
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
```

---

## 9. Bordas

### 9.1 Raio de Borda

- **Small**: 4px
- **Medium**: 8px (padrão)
- **Large**: 12px
- **Round**: 50% (círculos)

### 9.2 Espessura de Borda

- **Thin**: 1px
- **Medium**: 2px (padrão)
- **Thick**: 3px

---

## 10. Breakpoints

### 10.1 Sistema de Breakpoints

```css
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
Large Desktop: > 1280px
```

### 10.2 Uso

- **Mobile-first**: Desenvolver primeiro para mobile
- **Media queries**: Usar min-width
- **Conteúdo**: Adaptar layout para cada breakpoint

---

## 11. Animações

### 11.1 Durações

- **Fast**: 150ms
- **Normal**: 200-300ms (padrão)
- **Slow**: 400-500ms

### 11.2 Easing

- **Ease-in-out**: Padrão para a maioria das animações
- **Ease-out**: Elementos que entram na tela
- **Ease-in**: Elementos que saem da tela

### 11.3 Animações Comuns

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Scale**
```css
@keyframes scale {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}
```

---

## 12. Acessibilidade

### 12.1 Contraste

- **Texto normal**: Mínimo 4.5:1
- **Texto grande**: Mínimo 3:1
- **Elementos interativos**: Mínimo 3:1

### 12.2 Foco

- **Indicador de foco**: Borda 2-3px, cor contrastante
- **Ordem de tab**: Lógica e intuitiva
- **Skip links**: Para navegação rápida

### 12.3 ARIA

- **Labels**: Todos os campos com labels
- **Roles**: Apropriados para cada elemento
- **Live regions**: Para atualizações dinâmicas
- **Describedby**: Para mensagens de erro

---

## 13. Responsividade

### 13.1 Grid System

**Mobile**:
- 1 coluna
- Padding: 16-24px

**Tablet**:
- 2 colunas (onde aplicável)
- Padding: 24-32px

**Desktop**:
- 3-4 colunas (onde aplicável)
- Padding: 32-48px
- Max-width: 1200px (centralizado)

---

## 14. Tokens de Design

### 14.1 Cores (Tokens)

```javascript
colors: {
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',
    700: '#1E40AF',
    900: '#1E3A8A'
  },
  success: {
    500: '#10B981',
    700: '#047857'
  },
  error: {
    500: '#EF4444',
    700: '#B91C1C'
  },
  // ... outras cores
}
```

### 14.2 Espaçamento (Tokens)

```javascript
spacing: {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px'
}
```

---

## 15. Guia de Uso

### 15.1 Quando Usar Cada Componente

**Botão Primário**: Ações principais, CTAs
**Botão Secundário**: Ações secundárias
**Botão Texto**: Ações terciárias, links

**Input**: Coletar dados do usuário
**Card**: Agrupar conteúdo relacionado
**Modal**: Ações que requerem atenção

---

## 16. Próximos Passos

1. ✅ **Design System criado**: Padrões estabelecidos
2. ⏭️ **Implementação**: Criar componentes no código
3. ⏭️ **Documentação visual**: Adicionar exemplos visuais
4. ⏭️ **Manutenção**: Atualizar conforme necessário

---

**Documento criado em**: [Data]  
**Versão**: 1.0  
**Autor**: UX Designer  
**Status**: Aprovado

