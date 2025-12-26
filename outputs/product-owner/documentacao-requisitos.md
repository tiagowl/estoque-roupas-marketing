# Documentação de Requisitos - Site de Marketing

## 1. Visão Geral do Projeto

### 1.1 Objetivo
Desenvolver um site de marketing para promover um micro SaaS de controle de estoque voltado para pequenas lojas de roupas. O site deve captar leads qualificados através de um formulário de inscrição e demonstrar o valor real do produto para o negócio do cliente.

### 1.2 Escopo
Este projeto foca **exclusivamente no site de marketing** e no formulário de inscrição. As funcionalidades do micro SaaS mencionadas (CRUD de produtos, controle de estoque, etc.) são apenas para contexto do marketing e **não fazem parte deste escopo**.

### 1.3 Tecnologias
- **Frontend**: Next.js (React)
- **Backend**: Strapi 5 (CMS)
- **API Externa**: API de CEP (ViaCEP ou BrasilAPI)

---

## 2. Objetivos de Negócio

### 2.1 Objetivos Principais
1. **Promover o produto**: Demonstrar valor do micro SaaS para pequenas lojas de roupas
2. **Captar leads**: Converter visitantes em usuários através de formulário de inscrição
3. **Segmentar usuários**: Permitir escolha entre plano Gratuito e Premium
4. **Gerar interesse**: Usar boas práticas de marketing digital para aumentar conversão

### 2.2 Métricas de Sucesso
- Taxa de conversão (visitante → lead): > 2%
- Taxa de abandono do formulário: < 30%
- Taxa de erro no envio: < 5%
- Tempo de carregamento da landing page: < 3 segundos
- Score Lighthouse: > 90

---

## 3. Personas e Usuários-Alvo

### 3.1 Persona 1: Dono de Loja de Roupas Pequena

**Nome**: Carlos  
**Idade**: 35 anos  
**Perfil**: Proprietário de loja física de roupas com 2-5 funcionários

**Necessidades**:
- Controle de estoque simples e eficiente
- Evitar perdas por falta de organização
- Otimizar vendas identificando produtos parados
- Ter visibilidade sobre inventário

**Dores**:
- Estoque desorganizado
- Falta de visibilidade sobre produtos parados
- Processos manuais demorados
- Dificuldade em controlar variações (tamanho e cor)

**Objetivos**:
- Reduzir perdas de estoque
- Aumentar vendas
- Ter controle sobre inventário
- Otimizar processos

**Como o site de marketing deve atendê-lo**:
- Mostrar claramente como o produto resolve seus problemas
- Demonstrar benefícios específicos para lojas de roupas
- Facilitar processo de cadastro
- Transmitir confiança e profissionalismo

---

### 3.2 Persona 2: Gerente de Loja

**Nome**: Ana  
**Idade**: 28 anos  
**Perfil**: Gerente responsável pelo estoque e vendas

**Necessidades**:
- Ferramenta fácil de usar
- Relatórios rápidos e objetivos
- Controle em tempo real
- Economia de tempo

**Dores**:
- Processos manuais
- Falta de tempo para gestão detalhada
- Dificuldade em obter informações rápidas
- Falta de automação

**Objetivos**:
- Agilizar processos
- Ter informações em tempo real
- Reduzir trabalho manual
- Tomar decisões baseadas em dados

**Como o site de marketing deve atendê-lo**:
- Destacar simplicidade e facilidade de uso
- Mostrar que economiza tempo
- Demonstrar que fornece informações rápidas
- Mostrar interface intuitiva

---

## 4. Jornada do Usuário

### 4.1 Fase 1: Descoberta
**Ação**: Usuário encontra o site (busca, anúncio, indicação)  
**Emoção**: Curiosidade, ceticismo  
**Necessidade**: Entender rapidamente o que é o produto  
**Solução**: Landing page clara com proposta de valor

### 4.2 Fase 2: Interesse
**Ação**: Usuário lê sobre benefícios e funcionalidades  
**Emoção**: Interesse crescente, dúvidas  
**Necessidade**: Entender como o produto resolve seus problemas  
**Solução**: Seções explicativas, casos de uso, benefícios claros

### 4.3 Fase 3: Consideração
**Ação**: Usuário avalia se vale a pena experimentar  
**Emoção**: Hesitação, análise  
**Necessidade**: Ser convencido do valor  
**Solução**: Destaque de diferenciais, plano gratuito disponível, CTA claro

### 4.4 Fase 4: Ação
**Ação**: Usuário clica em "Quero Experimentar"  
**Emoção**: Decisão tomada, expectativa  
**Necessidade**: Processo simples e rápido  
**Solução**: Formulário intuitivo, validação em tempo real, busca de CEP

### 4.5 Fase 5: Cadastro
**Ação**: Usuário preenche e envia formulário  
**Emoção**: Ansiedade, esperança  
**Necessidade**: Confirmação de que deu certo  
**Solução**: Mensagem de confirmação clara, próximos passos informados

---

## 5. Funcionalidades Detalhadas

### 5.1 Landing Page

#### 5.1.1 Hero Section
- **Título principal**: Destaque do valor do produto
- **Subtítulo**: Explicação clara do benefício
- **CTA principal**: Botão "Quero Experimentar" destacado
- **Imagem/Ilustração**: Visual atraente relacionado ao produto

#### 5.1.2 Seção de Problemas
- Lista de dores comuns de lojas de roupas
- Conecta com problemas do usuário
- Cria identificação

#### 5.1.3 Seção de Solução
- Como o produto resolve os problemas
- Funcionalidades principais (contexto para marketing)
- Diferenciais competitivos

#### 5.1.4 Seção de Benefícios
- Benefícios específicos para lojas de roupas
- Economia de tempo
- Redução de perdas
- Aumento de vendas
- Controle total

#### 5.1.5 Seção de Planos
- Plano Gratuito: Até 100 produtos, sem multi-usuário
- Plano Premium: Produtos ilimitados, multi-usuário
- Comparação clara entre planos

#### 5.1.6 Seção de CTA Final
- Botão "Quero Experimentar" novamente
- Reforço da proposta de valor

#### 5.1.7 Footer
- Links úteis
- Informações de contato
- Redes sociais (se aplicável)

**Requisitos Técnicos**:
- Design responsivo (mobile-first)
- Performance otimizada (Lighthouse > 90)
- SEO básico (meta tags, estrutura semântica)
- Acessibilidade (WCAG 2.1 AA básico)

---

### 5.2 Botão "Quero Experimentar"

#### 5.2.1 Características Visuais
- Texto: "Quero Experimentar"
- Destaque visual (cor, tamanho, posicionamento)
- Visível em múltiplos pontos da página
- Hover effect para feedback visual

#### 5.2.2 Comportamento
- Ao clicar: Abre/exibe formulário de inscrição
- Pode ser modal, seção expandida, ou navegação
- Transição suave e clara
- Funciona com mouse e teclado

**Requisitos Técnicos**:
- Acessível (ARIA labels, navegação por teclado)
- Previne cliques duplicados
- Funciona em todos os dispositivos

---

### 5.3 Formulário de Inscrição

#### 5.3.1 Campos Obrigatórios

**Nome**
- Tipo: Texto
- Validação: Obrigatório, mínimo 2 caracteres
- Mensagem de erro: "Nome é obrigatório" / "Nome deve ter pelo menos 2 caracteres"

**Email**
- Tipo: Email
- Validação: Obrigatório, formato válido
- Mensagem de erro: "Email é obrigatório" / "Email inválido"

**Nome da Loja**
- Tipo: Texto
- Validação: Obrigatório, mínimo 2 caracteres
- Mensagem de erro: "Nome da loja é obrigatório" / "Nome da loja deve ter pelo menos 2 caracteres"

**Quantos Funcionários**
- Tipo: Número
- Validação: Obrigatório, mínimo 1
- Mensagem de erro: "Quantidade de funcionários é obrigatória" / "Deve ter pelo menos 1 funcionário"

**Endereço**
- Campos relacionados ao CEP (ver seção 5.4)
- Validação: CEP obrigatório (8 dígitos)
- Campos de endereço podem ser preenchidos automaticamente ou manualmente

**Plano**
- Tipo: Seleção (radio buttons ou cards)
- Opções: "Gratuito" ou "Premium"
- Validação: Obrigatório
- Descrições:
  - **Gratuito**: "Até 100 produtos, sem multi-usuário"
  - **Premium**: "Produtos ilimitados, multi-usuário"

#### 5.3.2 Validações
- Validação em tempo real (ao sair do campo ou após digitar)
- Mensagens de erro claras e próximas aos campos
- Validação final antes do envio
- Foco automático no primeiro campo com erro

#### 5.3.3 Botão de Envio
- Texto: "Enviar" ou "Cadastrar"
- Desabilitado durante processamento
- Indicador de carregamento durante envio
- Previne envios duplicados

**Requisitos Técnicos**:
- Acessível (ARIA labels, navegação por teclado, leitor de tela)
- Responsivo em mobile
- Funciona em todos os navegadores modernos
- Preserva dados após erro (não perde o que foi digitado)

---

### 5.4 Busca de Endereço por CEP

#### 5.4.1 Campo CEP
- Aceita apenas números
- Máximo 8 dígitos
- Pode formatar automaticamente (ex: 01310-100) ou manter sem formatação

#### 5.4.2 Busca Automática
- **Trigger 1**: Ao digitar 8 dígitos completos
- **Trigger 2**: Ao sair do campo (blur) com CEP válido
- Exibe indicador de carregamento durante busca

#### 5.4.3 Preenchimento Automático
Ao encontrar CEP, preenche automaticamente:
- Logradouro
- Bairro
- Cidade
- Estado
- Campos preenchidos são editáveis

#### 5.4.4 Tratamento de Erros
- **CEP não encontrado**: Mensagem "CEP não encontrado. Por favor, preencha o endereço manualmente."
- **Erro de API (timeout)**: Mensagem "Não foi possível buscar o CEP. Por favor, preencha o endereço manualmente."
- **API indisponível**: Mensagem de erro clara, permite preenchimento manual
- Não bloqueia envio do formulário se busca falhar

**Requisitos Técnicos**:
- Integração com API de CEP (ViaCEP ou BrasilAPI)
- Tratamento robusto de erros
- Timeout configurado (ex: 10 segundos)
- Fallback para preenchimento manual sempre disponível

---

### 5.5 Envio de Dados para Backend

#### 5.5.1 Estrutura de Dados
```json
{
  "nome": "string",
  "email": "string",
  "nomeLoja": "string",
  "quantidadeFuncionarios": number,
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

#### 5.5.2 Fluxo de Envio
1. Validação de todos os campos
2. Se houver erros: exibir mensagens, não enviar
3. Se válido: exibir indicador de carregamento, desabilitar botão
4. Enviar requisição para API do Strapi 5
5. Tratar resposta (sucesso ou erro)

#### 5.5.3 Tratamento de Respostas

**Sucesso (200/201)**:
- Remover indicador de carregamento
- Redirecionar para página de confirmação ou exibir mensagem de sucesso

**Erro de Validação (400)**:
- Exibir mensagem de erro clara
- Indicar qual campo tem problema (se possível)
- Permitir corrigir e tentar novamente

**Erro de Servidor (500)**:
- Exibir mensagem: "Erro no servidor. Tente novamente mais tarde."
- Permitir tentar novamente
- Não expor detalhes técnicos

**Email Já Cadastrado**:
- Exibir mensagem: "Este email já está cadastrado. Faça login ou use outro email."
- Destacar campo email
- Permitir corrigir

**Erro de Rede**:
- Exibir mensagem: "Erro de conexão. Verifique sua internet e tente novamente."
- Permitir tentar novamente
- Preservar dados do formulário

**Timeout**:
- Cancelar requisição após 30 segundos
- Exibir mensagem: "Tempo de resposta excedido. Tente novamente."
- Permitir tentar novamente

**Requisitos Técnicos**:
- Integração com Strapi 5
- Prevenção de envios duplicados
- Preservação de dados após erro
- Mensagens de erro claras e acionáveis
- Indicadores visuais de carregamento

---

### 5.6 Página de Confirmação

#### 5.6.1 Conteúdo
- Mensagem de sucesso clara (ex: "Cadastro realizado com sucesso!")
- Informações sobre próximos passos:
  - "Verifique seu email para ativar sua conta" (se aplicável)
  - "Faça login para começar a usar" (se aplicável)
- Botão ou link para acessar o sistema

#### 5.6.2 Design
- Design positivo e encorajador
- Visual profissional
- Responsivo

**Requisitos Técnicos**:
- Página acessível
- Funciona em todos os dispositivos
- Pode redirecionar para landing page se acessado diretamente sem contexto

---

## 6. Requisitos Não-Funcionais

### 6.1 Performance
- Tempo de carregamento da landing page: < 3 segundos
- Score Lighthouse: > 90
- Imagens otimizadas (WebP, lazy loading)
- Code splitting implementado

### 6.2 Responsividade
- Mobile-first design
- Funciona em dispositivos de 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Testado em dispositivos principais

### 6.3 Acessibilidade
- WCAG 2.1 AA básico
- Navegação por teclado funcional
- Leitor de tela compatível
- Contraste adequado
- ARIA labels onde necessário

### 6.4 Compatibilidade
- Navegadores: Chrome, Firefox, Safari, Edge (últimas 2 versões)
- Fallbacks para navegadores antigos
- Funciona sem JavaScript (degradação graciosa)

### 6.5 SEO
- Meta title e description configurados
- Estrutura semântica HTML (h1, h2, etc.)
- Alt text em todas as imagens
- URLs amigáveis
- Sitemap (se aplicável)

### 6.6 Segurança
- Validação de dados no frontend e backend
- Proteção contra XSS
- HTTPS obrigatório
- Sanitização de inputs
- Rate limiting no backend (prevenir spam)

---

## 7. Restrições e Limitações

### 7.1 Restrições Técnicas
- Frontend deve ser Next.js (React)
- Backend deve ser Strapi 5
- Não inclui funcionalidades do SaaS (apenas site de marketing)

### 7.2 Restrições de Escopo
- Não inclui sistema de autenticação
- Não inclui dashboard do usuário
- Não inclui funcionalidades de gestão de estoque
- Foco apenas em captação de leads

### 7.3 Restrições de Tempo
- MVP deve ser entregue em 2 semanas
- Versão completa em 3 semanas

---

## 8. Dependências Externas

### 8.1 API de CEP
- **Opção 1**: ViaCEP (https://viacep.com.br/)
- **Opção 2**: BrasilAPI (https://brasilapi.com.br/)
- Requisito: API pública, gratuita, confiável

### 8.2 Strapi 5
- Backend CMS
- Requisito: API configurada e acessível
- Endpoint para receber dados do formulário

---

## 9. Definição de Pronto

Uma funcionalidade é considerada "Pronta" quando:

1. ✅ Todos os critérios de aceitação foram atendidos
2. ✅ Código revisado e aprovado
3. ✅ Testes automatizados escritos e passando
4. ✅ Testes manuais realizados
5. ✅ Documentação atualizada
6. ✅ Acessibilidade validada (WCAG 2.1 AA básico)
7. ✅ Responsividade testada em dispositivos principais
8. ✅ Performance validada (Lighthouse > 90)
9. ✅ Integração com backend funcionando
10. ✅ Deploy em ambiente de staging/teste

---

## 10. Glossário

- **Landing Page**: Página inicial do site de marketing
- **CTA**: Call to Action (chamada para ação)
- **Lead**: Visitante que preencheu o formulário e se tornou potencial cliente
- **MVP**: Minimum Viable Product (Produto Mínimo Viável)
- **Strapi**: CMS headless usado como backend
- **Next.js**: Framework React para aplicações web
- **WCAG**: Web Content Accessibility Guidelines (Diretrizes de Acessibilidade)

---

## 11. Anexos

### 11.1 Referências
- Documentação Next.js: https://nextjs.org/docs
- Documentação Strapi 5: https://docs.strapi.io/
- ViaCEP API: https://viacep.com.br/
- BrasilAPI: https://brasilapi.com.br/
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/

### 11.2 User Stories Relacionadas
Ver arquivo: `user-stories-estruturadas.md`

### 11.3 Critérios de Aceitação
Ver arquivo: `criterios-aceitacao.md`

### 11.4 Backlog Priorizado
Ver arquivo: `backlog-priorizado.md`

---

**Documento criado em**: [Data]  
**Versão**: 1.0  
**Autor**: Product Owner  
**Status**: Aprovado

