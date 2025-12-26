# User Stories Estruturadas - Site de Marketing

## Análise de Requisitos

### Objetivos de Negócio
- Promover o micro SaaS de controle de estoque para pequenas lojas de roupas
- Captar leads qualificados através de formulário de inscrição
- Demonstrar valor real do produto para o negócio do cliente
- Converter visitantes em usuários experimentais

### Usuários-Alvo (Personas)

#### Persona 1: Dono de Loja de Roupas Pequena
- **Nome**: Carlos, 35 anos
- **Perfil**: Proprietário de loja física de roupas com 2-5 funcionários
- **Necessidades**: Controle de estoque simples, evitar perdas, otimizar vendas
- **Dores**: Estoque desorganizado, falta de visibilidade sobre produtos parados
- **Objetivos**: Reduzir perdas, aumentar vendas, ter controle sobre inventário

#### Persona 2: Gerente de Loja
- **Nome**: Ana, 28 anos
- **Perfil**: Gerente responsável pelo estoque e vendas
- **Necessidades**: Ferramenta fácil de usar, relatórios rápidos
- **Dores**: Processos manuais, falta de tempo para gestão detalhada
- **Objetivos**: Agilizar processos, ter informações em tempo real

### Funcionalidades Principais
1. Landing page com proposta de valor
2. Botão de CTA "Quero Experimentar"
3. Formulário de inscrição completo
4. Integração com API de CEP
5. Seleção de plano (Gratuito ou Premium)
6. Envio de dados para backend (Strapi 5)

### Restrições e Limitações
- Frontend: Next.js (React)
- Backend: Strapi 5 (CMS)
- Foco apenas no site de marketing (não inclui funcionalidades do SaaS)

---

## User Stories

### US-001: Visualizar Landing Page com Proposta de Valor
**Como** dono de uma pequena loja de roupas  
**Eu quero** visualizar uma landing page que mostre o valor real do micro SaaS para meu negócio  
**Para que** eu possa entender rapidamente como o produto pode me ajudar e decidir se vale a pena experimentar

**Contexto**: Esta é a primeira interação do usuário com o produto. A landing page deve ser convincente e focada em benefícios.

**Detalhamento**:
- Página inicial deve apresentar claramente o problema que resolve
- Deve destacar benefícios específicos para lojas de roupas
- Deve usar boas práticas de marketing digital
- Deve ser responsiva (mobile-first)
- Deve ter boa performance (SEO e velocidade)

**Valor de Negócio**: Alto - Primeira impressão, conversão de visitantes

**Prioridade**: Crítica (P0)

---

### US-002: Solicitar Experimentação do Produto
**Como** visitante interessado no produto  
**Eu quero** clicar em um botão "Quero Experimentar"  
**Para que** eu possa iniciar o processo de cadastro e começar a usar o produto

**Contexto**: O botão deve ser visível e chamativo, seguindo boas práticas de UX para CTAs.

**Detalhamento**:
- Botão deve estar visível na landing page
- Texto do botão: "Quero Experimentar"
- Botão deve ter destaque visual (cor, tamanho, posicionamento)
- Ao clicar, deve abrir/exibir o formulário de inscrição
- Deve funcionar em todos os dispositivos

**Valor de Negócio**: Alto - Conversão de visitante em lead

**Prioridade**: Crítica (P0)

---

### US-003: Preencher Formulário de Inscrição
**Como** visitante interessado  
**Eu quero** preencher um formulário de inscrição com minhas informações  
**Para que** eu possa criar minha conta e começar a usar o produto

**Contexto**: O formulário deve ser simples, intuitivo e validar dados em tempo real.

**Detalhamento**:
- Formulário deve conter os seguintes campos:
  - Nome (obrigatório, texto)
  - Email (obrigatório, validação de formato)
  - Nome da Loja (obrigatório, texto)
  - Quantos Funcionários (obrigatório, número)
  - Endereço (obrigatório, com integração de CEP)
  - Plano desejado (obrigatório, seleção: Gratuito ou Premium)
- Campos devem ter validação em tempo real
- Mensagens de erro devem ser claras e objetivas
- Formulário deve ser acessível (ARIA labels, navegação por teclado)

**Valor de Negócio**: Alto - Captação de leads qualificados

**Prioridade**: Crítica (P0)

---

### US-004: Buscar Endereço por CEP
**Como** usuário preenchendo o formulário  
**Eu quero** informar meu CEP e ter os dados de endereço preenchidos automaticamente  
**Para que** eu possa economizar tempo e evitar erros de digitação

**Contexto**: Integração com API de CEP (ex: ViaCEP, BrasilAPI) para melhorar UX.

**Detalhamento**:
- Campo CEP deve aceitar apenas números (máximo 8 dígitos)
- Ao sair do campo CEP (blur) ou ao digitar 8 dígitos, deve buscar automaticamente
- Durante a busca, deve exibir indicador de carregamento
- Ao encontrar CEP, deve preencher automaticamente:
  - Logradouro
  - Bairro
  - Cidade
  - Estado
- Campos preenchidos automaticamente devem ser editáveis
- Se CEP não encontrado, deve exibir mensagem clara
- Deve tratar erros de API (timeout, indisponibilidade)

**Valor de Negócio**: Médio - Melhora experiência do usuário, reduz abandono

**Prioridade**: Alta (P1)

---

### US-005: Selecionar Plano (Gratuito ou Premium)
**Como** usuário preenchendo o formulário  
**Eu quero** escolher entre o plano Gratuito ou Premium  
**Para que** eu possa selecionar a opção que melhor se adequa às minhas necessidades

**Contexto**: A seleção de plano deve ser clara, mostrando diferenças entre opções.

**Detalhamento**:
- Deve haver duas opções: "Gratuito" e "Premium"
- Deve exibir informações sobre cada plano:
  - **Gratuito**: Até 100 produtos, sem multi-usuário
  - **Premium**: Produtos ilimitados, multi-usuário
- Seleção deve ser obrigatória
- Interface deve ser clara (radio buttons ou cards selecionáveis)
- Pode incluir breve descrição de benefícios de cada plano

**Valor de Negócio**: Alto - Define modelo de negócio, segmentação de usuários

**Prioridade**: Crítica (P0)

---

### US-006: Enviar Dados do Formulário para Backend
**Como** usuário que preencheu o formulário  
**Eu quero** enviar meus dados ao clicar em "Enviar"  
**Para que** minha conta seja criada no sistema e eu possa começar a usar o produto

**Contexto**: Integração com backend Strapi 5 para persistência de dados.

**Detalhamento**:
- Ao clicar em "Enviar", deve validar todos os campos
- Se houver erros, deve exibir mensagens e não enviar
- Durante o envio, deve exibir indicador de carregamento
- Deve desabilitar botão de envio durante processamento
- Dados devem ser enviados para API do Strapi 5
- Estrutura de dados a enviar:
  ```json
  {
    "nome": "string",
    "email": "string",
    "nomeLoja": "string",
    "quantidadeFuncionarios": "number",
    "endereco": {
      "cep": "string",
      "logradouro": "string",
      "bairro": "string",
      "cidade": "string",
      "estado": "string",
      "complemento": "string (opcional)"
    },
    "plano": "gratuito" | "premium"
  }
  ```
- Deve tratar respostas de sucesso e erro
- Em caso de sucesso: redirecionar para página de confirmação ou login
- Em caso de erro: exibir mensagem clara ao usuário
- Deve tratar erros de rede, timeout, e validação do backend

**Valor de Negócio**: Crítico - Base para todo o sistema, captação de leads

**Prioridade**: Crítica (P0)

---

### US-007: Visualizar Confirmação de Cadastro
**Como** usuário que enviou o formulário com sucesso  
**Eu quero** ver uma mensagem de confirmação  
**Para que** eu saiba que meu cadastro foi realizado com sucesso e quais são os próximos passos

**Contexto**: Feedback positivo após ação do usuário melhora experiência.

**Detalhamento**:
- Deve exibir mensagem de sucesso clara
- Deve informar próximos passos (ex: "Verifique seu email", "Faça login")
- Pode incluir botão para acessar o sistema
- Design deve ser positivo e encorajador

**Valor de Negócio**: Médio - Melhora experiência, reduz ansiedade do usuário

**Prioridade**: Média (P2)

---

## Resumo de User Stories

| ID | Título | Prioridade | Esforço Estimado | Valor |
|----|--------|------------|------------------|-------|
| US-001 | Visualizar Landing Page | P0 - Crítica | M (5-7 dias) | Alto |
| US-002 | Solicitar Experimentação | P0 - Crítica | S (1-2 dias) | Alto |
| US-003 | Preencher Formulário | P0 - Crítica | M (5-6 dias) | Alto |
| US-004 | Buscar Endereço por CEP | P1 - Alta | M (3-4 dias) | Médio |
| US-005 | Selecionar Plano | P0 - Crítica | S (1-2 dias) | Alto |
| US-006 | Enviar Dados para Backend | P0 - Crítica | M (4-5 dias) | Crítico |
| US-007 | Visualizar Confirmação | P2 - Média | S (1 dia) | Médio |

**Total Estimado**: ~20-27 dias de desenvolvimento

---

## Dependências entre User Stories

```
US-001 (Landing Page)
  └─> US-002 (Botão CTA)
      └─> US-003 (Formulário)
          ├─> US-004 (Busca CEP) [opcional]
          ├─> US-005 (Seleção Plano)
          └─> US-006 (Envio Backend)
              └─> US-007 (Confirmação)
```

---

## Observações

1. **Foco em Marketing**: Todas as user stories focam no site de marketing e captação de leads
2. **Funcionalidades do SaaS**: As funcionalidades mencionadas (CRUD produtos, estoque, etc.) são apenas para contexto do marketing, não fazem parte deste escopo
3. **Tecnologias**: Next.js (React) no frontend, Strapi 5 no backend
4. **Mobile-First**: Todas as funcionalidades devem ser responsivas e otimizadas para mobile

