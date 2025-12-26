# Critérios de Aceitação - Site de Marketing

Este documento define os critérios de aceitação detalhados para cada user story do site de marketing do micro SaaS de controle de estoque.

---

## US-001: Visualizar Landing Page com Proposta de Valor

### Cenários de Sucesso

#### CT-001.1: Exibição da Landing Page
**Dado** que sou um visitante acessando o site  
**Quando** a página carregar  
**Então** devo ver:
- Título principal destacando o valor do produto
- Subtítulo explicando o benefício para lojas de roupas
- Seções organizadas e fáceis de ler
- Botão "Quero Experimentar" visível e destacado
- Design moderno e profissional

#### CT-001.2: Responsividade Mobile
**Dado** que estou acessando pelo celular  
**Quando** a página carregar  
**Então** devo ver:
- Layout adaptado para tela pequena
- Textos legíveis sem necessidade de zoom
- Botão CTA acessível e fácil de clicar
- Navegação funcional

#### CT-001.3: Performance da Página
**Dado** que estou acessando o site  
**Quando** a página carregar  
**Então**:
- Tempo de carregamento deve ser menor que 3 segundos
- Imagens devem estar otimizadas
- Deve ter score Lighthouse acima de 90

#### CT-001.4: SEO Básico
**Dado** que a página está publicada  
**Quando** for indexada por buscadores  
**Então** deve ter:
- Meta title e description configurados
- Estrutura semântica HTML (h1, h2, etc.)
- Alt text em todas as imagens

### Casos Extremos

#### CT-001.5: Conexão Lenta
**Dado** que tenho conexão lenta (3G)  
**Quando** acessar o site  
**Então**:
- Deve exibir indicador de carregamento
- Conteúdo deve carregar progressivamente
- Não deve travar ou quebrar

#### CT-001.6: Navegador Antigo
**Dado** que uso um navegador antigo  
**Quando** acessar o site  
**Então**:
- Deve funcionar com fallbacks apropriados
- Deve exibir mensagem se não for compatível

### Validações Necessárias
- ✅ Página carrega corretamente em Chrome, Firefox, Safari, Edge
- ✅ Layout responsivo em mobile (320px+), tablet (768px+), desktop (1024px+)
- ✅ Performance otimizada (Lighthouse score > 90)
- ✅ Acessibilidade básica (WCAG 2.1 AA)

---

## US-002: Solicitar Experimentação do Produto

### Cenários de Sucesso

#### CT-002.1: Botão Visível na Landing Page
**Dado** que estou na landing page  
**Quando** visualizar a página  
**Então** devo ver:
- Botão com texto "Quero Experimentar"
- Botão destacado visualmente (cor, tamanho, posição)
- Botão acessível (pode ser clicado com mouse e teclado)

#### CT-002.2: Ação ao Clicar no Botão
**Dado** que estou na landing page  
**Quando** clicar no botão "Quero Experimentar"  
**Então**:
- Deve abrir/exibir o formulário de inscrição
- Pode ser modal, seção expandida, ou navegação para nova página
- Transição deve ser suave e clara

#### CT-002.3: Múltiplos Botões na Página
**Dado** que há múltiplos botões "Quero Experimentar" na página  
**Quando** clicar em qualquer um deles  
**Então** todos devem ter o mesmo comportamento

### Casos Extremos

#### CT-002.4: Clique Duplo Rápido
**Dado** que clico rapidamente duas vezes no botão  
**Quando** executar a ação  
**Então**:
- Não deve abrir o formulário duas vezes
- Deve prevenir comportamento duplicado

#### CT-002.5: Navegação por Teclado
**Dado** que navego apenas com teclado  
**Quando** focar no botão e pressionar Enter  
**Então** deve abrir o formulário normalmente

### Validações Necessárias
- ✅ Botão visível e acessível
- ✅ Funciona com mouse e teclado
- ✅ Previne cliques duplicados
- ✅ Funciona em todos os dispositivos

---

## US-003: Preencher Formulário de Inscrição

### Cenários de Sucesso

#### CT-003.1: Exibição do Formulário
**Dado** que cliquei em "Quero Experimentar"  
**Quando** o formulário for exibido  
**Então** devo ver os seguintes campos:
- Nome (campo de texto)
- Email (campo de email)
- Nome da Loja (campo de texto)
- Quantos Funcionários (campo numérico)
- Endereço (campos relacionados ao CEP)
- Plano (seleção: Gratuito ou Premium)
- Botão "Enviar" ou "Cadastrar"

#### CT-003.2: Validação de Campo Nome
**Dado** que estou preenchendo o campo Nome  
**Quando**:
- Campo estiver vazio e eu tentar enviar → Deve exibir erro "Nome é obrigatório"
- Campo tiver menos de 2 caracteres → Deve exibir erro "Nome deve ter pelo menos 2 caracteres"
- Campo tiver caracteres válidos → Não deve exibir erro

#### CT-003.3: Validação de Campo Email
**Dado** que estou preenchendo o campo Email  
**Quando**:
- Campo estiver vazio e eu tentar enviar → Deve exibir erro "Email é obrigatório"
- Campo não tiver formato válido (ex: "teste") → Deve exibir erro "Email inválido"
- Campo tiver formato válido (ex: "teste@email.com") → Não deve exibir erro

#### CT-003.4: Validação de Campo Nome da Loja
**Dado** que estou preenchendo o campo Nome da Loja  
**Quando**:
- Campo estiver vazio e eu tentar enviar → Deve exibir erro "Nome da loja é obrigatório"
- Campo tiver menos de 2 caracteres → Deve exibir erro "Nome da loja deve ter pelo menos 2 caracteres"
- Campo tiver caracteres válidos → Não deve exibir erro

#### CT-003.5: Validação de Campo Quantos Funcionários
**Dado** que estou preenchendo o campo Quantos Funcionários  
**Quando**:
- Campo estiver vazio e eu tentar enviar → Deve exibir erro "Quantidade de funcionários é obrigatória"
- Campo tiver valor menor que 1 → Deve exibir erro "Deve ter pelo menos 1 funcionário"
- Campo tiver valor válido (número inteiro positivo) → Não deve exibir erro

#### CT-003.6: Validação de Campo Plano
**Dado** que estou selecionando o plano  
**Quando**:
- Nenhum plano estiver selecionado e eu tentar enviar → Deve exibir erro "Selecione um plano"
- Um plano estiver selecionado → Não deve exibir erro

#### CT-003.7: Validação em Tempo Real
**Dado** que estou preenchendo qualquer campo  
**Quando** sair do campo (blur) ou após digitar  
**Então**:
- Se houver erro, deve exibir mensagem de erro próxima ao campo
- Se estiver correto, deve remover mensagem de erro (se houver)
- Mensagens devem ser claras e objetivas

#### CT-003.8: Envio com Todos os Campos Válidos
**Dado** que preenchi todos os campos corretamente  
**Quando** clicar em "Enviar"  
**Então**:
- Não deve exibir erros
- Deve processar o envio (ver US-006)

### Casos Extremos

#### CT-003.9: Campos com Valores Extremos
**Dado** que preencho campos com valores extremos  
**Quando**:
- Nome com 100+ caracteres → Deve aceitar ou limitar com mensagem clara
- Email com 200+ caracteres → Deve validar formato mesmo sendo longo
- Quantidade de funcionários com 999999 → Deve aceitar ou limitar com mensagem clara

#### CT-003.10: Caracteres Especiais
**Dado** que preencho campos com caracteres especiais  
**Quando**:
- Nome com acentos, espaços, hífens → Deve aceitar normalmente
- Email com caracteres válidos → Deve aceitar
- Nome da loja com caracteres especiais → Deve aceitar normalmente

#### CT-003.11: Preenchimento com Copiar/Colar
**Dado** que copio e colo valores nos campos  
**Quando** colar conteúdo  
**Então**:
- Deve aceitar o valor colado
- Deve validar após colar
- Deve funcionar normalmente

#### CT-003.12: Acessibilidade
**Dado** que uso leitor de tela ou navego apenas com teclado  
**Quando** preencher o formulário  
**Então**:
- Todos os campos devem ter labels acessíveis
- Deve ser possível navegar entre campos com Tab
- Mensagens de erro devem ser anunciadas pelo leitor de tela

### Validações Necessárias
- ✅ Todos os campos obrigatórios validados
- ✅ Mensagens de erro claras e próximas aos campos
- ✅ Validação em tempo real funciona
- ✅ Formulário acessível (ARIA, navegação por teclado)
- ✅ Funciona em todos os navegadores modernos
- ✅ Responsivo em mobile

---

## US-004: Buscar Endereço por CEP

### Cenários de Sucesso

#### CT-004.1: Busca Automática ao Digitar CEP Completo
**Dado** que estou no campo CEP  
**Quando** digitar 8 dígitos numéricos  
**Então**:
- Deve buscar automaticamente o endereço
- Deve exibir indicador de carregamento durante a busca
- Ao encontrar, deve preencher automaticamente: logradouro, bairro, cidade, estado

#### CT-004.2: Busca ao Sair do Campo (Blur)
**Dado** que digitei um CEP no campo  
**Quando** sair do campo (blur) com CEP válido (8 dígitos)  
**Então**:
- Deve buscar automaticamente o endereço
- Deve preencher campos se encontrar

#### CT-004.3: CEP Encontrado com Sucesso
**Dado** que busquei um CEP válido (ex: 01310-100)  
**Quando** a API retornar dados  
**Então**:
- Deve preencher logradouro, bairro, cidade, estado
- Campos preenchidos devem estar editáveis
- Deve remover indicador de carregamento
- Não deve exibir mensagem de erro

#### CT-004.4: Formatação do CEP
**Dado** que estou digitando o CEP  
**Quando** digitar números  
**Então**:
- Campo deve aceitar apenas números
- Pode formatar automaticamente (ex: 01310-100) ou manter sem formatação
- Máximo de 8 dígitos

### Casos Extremos

#### CT-004.5: CEP Não Encontrado
**Dado** que busquei um CEP inexistente (ex: 00000000)  
**Quando** a API retornar que não encontrou  
**Então**:
- Deve exibir mensagem clara: "CEP não encontrado. Por favor, preencha o endereço manualmente."
- Campos de endereço devem permanecer vazios e editáveis
- Não deve bloquear envio do formulário

#### CT-004.6: Erro na API (Timeout)
**Dado** que busquei um CEP  
**Quando** a API demorar mais de 10 segundos ou retornar erro  
**Então**:
- Deve exibir mensagem: "Não foi possível buscar o CEP. Por favor, preencha o endereço manualmente."
- Campos devem permanecer editáveis
- Não deve bloquear envio do formulário

#### CT-004.7: API Indisponível
**Dado** que a API de CEP está indisponível  
**Quando** tentar buscar CEP  
**Então**:
- Deve exibir mensagem de erro clara
- Usuário deve poder preencher manualmente
- Formulário não deve travar

#### CT-004.8: CEP Parcial
**Dado** que digitei menos de 8 dígitos  
**Quando** sair do campo  
**Então**:
- Não deve buscar automaticamente
- Pode exibir mensagem: "CEP deve ter 8 dígitos" se tentar buscar

#### CT-004.9: Edição Após Preenchimento Automático
**Dado** que o CEP foi encontrado e campos preenchidos  
**Quando** editar qualquer campo de endereço  
**Então**:
- Deve permitir edição normalmente
- Não deve sobrescrever manualmente

#### CT-004.10: Múltiplas Buscas
**Dado** que busquei um CEP e depois mudei o CEP  
**Quando** buscar novamente  
**Então**:
- Deve limpar campos anteriores
- Deve buscar novo CEP
- Deve atualizar campos com novos dados

### Validações Necessárias
- ✅ Integração com API de CEP funcional (ViaCEP ou BrasilAPI)
- ✅ Tratamento de erros (CEP não encontrado, timeout, API indisponível)
- ✅ Indicador de carregamento durante busca
- ✅ Campos editáveis após preenchimento automático
- ✅ Não bloqueia envio do formulário se busca falhar
- ✅ Funciona em todos os navegadores

---

## US-005: Selecionar Plano (Gratuito ou Premium)

### Cenários de Sucesso

#### CT-005.1: Exibição das Opções de Plano
**Dado** que estou no formulário  
**Quando** visualizar a seção de planos  
**Então** devo ver:
- Opção "Gratuito" com descrição: "Até 100 produtos, sem multi-usuário"
- Opção "Premium" com descrição: "Produtos ilimitados, multi-usuário"
- Interface clara (radio buttons ou cards selecionáveis)
- Uma opção deve estar pré-selecionada (recomendado: Gratuito)

#### CT-005.2: Seleção do Plano Gratuito
**Dado** que estou no formulário  
**Quando** selecionar "Gratuito"  
**Então**:
- Opção deve ficar marcada/selecionada visualmente
- Deve ser possível enviar o formulário com esta seleção

#### CT-005.3: Seleção do Plano Premium
**Dado** que estou no formulário  
**Quando** selecionar "Premium"  
**Então**:
- Opção deve ficar marcada/selecionada visualmente
- Deve ser possível enviar o formulário com esta seleção

#### CT-005.4: Troca de Plano
**Dado** que selecionei um plano  
**Quando** selecionar o outro plano  
**Então**:
- Seleção anterior deve ser desmarcada
- Nova seleção deve ser marcada
- Deve funcionar sem problemas

### Casos Extremos

#### CT-005.5: Tentativa de Envio sem Seleção
**Dado** que nenhum plano está selecionado  
**Quando** tentar enviar o formulário  
**Então**:
- Deve exibir erro: "Selecione um plano"
- Não deve enviar o formulário
- Erro deve ser claro e visível

#### CT-005.6: Acessibilidade
**Dado** que uso leitor de tela ou navego apenas com teclado  
**Quando** selecionar um plano  
**Então**:
- Deve ser possível navegar entre opções com teclado
- Seleção deve ser anunciada pelo leitor de tela
- Deve ser possível selecionar com Enter/Space

### Validações Necessárias
- ✅ Duas opções claramente visíveis (Gratuito e Premium)
- ✅ Descrições de cada plano exibidas
- ✅ Seleção obrigatória validada
- ✅ Interface acessível (teclado e leitor de tela)
- ✅ Funciona em todos os dispositivos

---

## US-006: Enviar Dados do Formulário para Backend

### Cenários de Sucesso

#### CT-006.1: Envio com Dados Válidos
**Dado** que preenchi todos os campos corretamente  
**Quando** clicar em "Enviar"  
**Então**:
- Deve validar todos os campos antes de enviar
- Deve exibir indicador de carregamento
- Deve desabilitar botão de envio durante processamento
- Deve enviar dados para API do Strapi 5
- Estrutura de dados enviada deve ser:
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

#### CT-006.2: Resposta de Sucesso
**Dado** que enviei o formulário  
**Quando** o backend retornar sucesso (status 200/201)  
**Então**:
- Deve remover indicador de carregamento
- Deve redirecionar para página de confirmação ou exibir mensagem de sucesso
- Não deve exibir erros

#### CT-006.3: Validação Antes do Envio
**Dado** que há campos inválidos no formulário  
**Quando** clicar em "Enviar"  
**Então**:
- Não deve enviar dados
- Deve exibir mensagens de erro nos campos inválidos
- Deve focar no primeiro campo com erro

### Casos Extremos

#### CT-006.4: Erro de Rede (Sem Conexão)
**Dado** que não tenho conexão com internet  
**Quando** tentar enviar o formulário  
**Então**:
- Deve exibir mensagem: "Erro de conexão. Verifique sua internet e tente novamente."
- Deve permitir tentar novamente
- Dados do formulário devem ser preservados (não perder o que foi digitado)

#### CT-006.5: Timeout da Requisição
**Dado** que o servidor demora muito para responder  
**Quando** a requisição exceder 30 segundos  
**Então**:
- Deve cancelar a requisição
- Deve exibir mensagem: "Tempo de resposta excedido. Tente novamente."
- Deve permitir tentar novamente

#### CT-006.6: Erro do Backend (400 - Validação)
**Dado** que enviei dados que o backend rejeitou  
**Quando** o backend retornar erro 400  
**Então**:
- Deve exibir mensagem de erro clara
- Deve indicar qual campo tem problema (se possível)
- Deve permitir corrigir e tentar novamente

#### CT-006.7: Erro do Backend (500 - Servidor)
**Dado** que o servidor está com problemas  
**Quando** o backend retornar erro 500  
**Então**:
- Deve exibir mensagem: "Erro no servidor. Tente novamente mais tarde."
- Deve permitir tentar novamente
- Não deve expor detalhes técnicos do erro

#### CT-006.8: Email Já Cadastrado
**Dado** que enviei um email que já existe no sistema  
**Quando** o backend retornar erro de duplicação  
**Então**:
- Deve exibir mensagem: "Este email já está cadastrado. Faça login ou use outro email."
- Deve destacar o campo email
- Deve permitir corrigir

#### CT-006.9: Múltiplos Cliques no Botão Enviar
**Dado** que clico rapidamente várias vezes em "Enviar"  
**Quando** executar a ação  
**Então**:
- Deve prevenir envios duplicados
- Deve processar apenas uma requisição
- Botão deve estar desabilitado durante processamento

#### CT-006.10: Dados Preservados Após Erro
**Dado** que ocorreu um erro ao enviar  
**Quando** o erro for exibido  
**Então**:
- Todos os dados preenchidos devem ser preservados
- Usuário não deve precisar preencher novamente
- Deve poder corrigir apenas o necessário e tentar novamente

### Validações Necessárias
- ✅ Integração com Strapi 5 funcional
- ✅ Estrutura de dados correta enviada
- ✅ Tratamento de todos os tipos de erro (rede, timeout, validação, servidor)
- ✅ Mensagens de erro claras e acionáveis
- ✅ Prevenção de envios duplicados
- ✅ Preservação de dados após erro
- ✅ Indicadores visuais de carregamento
- ✅ Redirecionamento ou feedback após sucesso

---

## US-007: Visualizar Confirmação de Cadastro

### Cenários de Sucesso

#### CT-007.1: Exibição de Mensagem de Sucesso
**Dado** que meu cadastro foi realizado com sucesso  
**Quando** a página de confirmação carregar  
**Então** devo ver:
- Mensagem clara de sucesso (ex: "Cadastro realizado com sucesso!")
- Informação sobre próximos passos
- Design positivo e encorajador

#### CT-007.2: Informações de Próximos Passos
**Dado** que estou na página de confirmação  
**Quando** visualizar a página  
**Então** devo ver informações como:
- "Verifique seu email para ativar sua conta" (se aplicável)
- "Faça login para começar a usar" (se aplicável)
- Link ou botão para acessar o sistema

#### CT-007.3: Botão de Ação
**Dado** que estou na página de confirmação  
**Quando** visualizar a página  
**Então**:
- Deve haver botão ou link para acessar o sistema
- Botão deve ser claro e visível

### Casos Extremos

#### CT-007.4: Acesso Direto à Página
**Dado** que acesso diretamente a URL de confirmação  
**Quando** não houver contexto de cadastro realizado  
**Então**:
- Pode redirecionar para landing page
- Ou exibir mensagem genérica
- Não deve quebrar ou exibir erro

### Validações Necessárias
- ✅ Mensagem de sucesso clara
- ✅ Próximos passos informados
- ✅ Design positivo e profissional
- ✅ Funciona em todos os dispositivos

---

## Resumo de Critérios de Aceitação

| User Story | Cenários de Sucesso | Casos Extremos | Validações |
|------------|---------------------|----------------|------------|
| US-001 | 4 | 2 | 4 |
| US-002 | 3 | 2 | 4 |
| US-003 | 8 | 4 | 6 |
| US-004 | 4 | 6 | 6 |
| US-005 | 4 | 2 | 5 |
| US-006 | 3 | 7 | 8 |
| US-007 | 3 | 1 | 4 |

**Total**: 29 cenários de sucesso, 24 casos extremos, 37 validações

---

## Definição de Pronto (Definition of Done)

Uma user story é considerada "Pronta" quando:

1. ✅ Todos os critérios de aceitação foram atendidos
2. ✅ Código revisado e aprovado
3. ✅ Testes automatizados escritos e passando
4. ✅ Testes manuais realizados
5. ✅ Documentação atualizada (se necessário)
6. ✅ Acessibilidade validada (WCAG 2.1 AA básico)
7. ✅ Responsividade testada em dispositivos principais
8. ✅ Performance validada
9. ✅ Integração com backend funcionando
10. ✅ Deploy em ambiente de staging/teste

