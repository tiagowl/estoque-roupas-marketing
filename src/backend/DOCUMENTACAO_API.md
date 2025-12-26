# Documentação da API - Backend Strapi 5

## Visão Geral

Esta documentação descreve todos os endpoints da API do backend Strapi 5 para o site de marketing do micro SaaS de controle de estoque.

**Base URL**: `http://localhost:1337` (desenvolvimento)  
**Versão da API**: 1.0  
**Formato**: JSON

---

## Autenticação

### Endpoints Públicos

- `POST /api/signups` - Não requer autenticação

### Endpoints Protegidos (Admin)

- `GET /api/signups` - Requer token JWT de admin
- `GET /api/signups/:id` - Requer token JWT de admin
- `GET /api/signups/stats` - Requer token JWT de admin

**Como obter token de admin:**

1. Acesse o admin panel: `http://localhost:1337/admin`
2. Faça login
3. O token será armazenado automaticamente nos cookies

**Para usar em requisições:**

```http
Authorization: Bearer <seu-jwt-token>
```

---

## Endpoints

### 1. Criar Signup

Cria um novo cadastro de usuário interessado no produto.

**Endpoint**: `POST /api/signups`

**Autenticação**: Não requerida (público)

**Request Body:**

```json
{
  "data": {
    "nome": "João Silva",
    "email": "joao@example.com",
    "nomeLoja": "Loja do João",
    "quantidadeFuncionarios": 3,
    "endereco": {
      "cep": "01310100",
      "logradouro": "Avenida Paulista",
      "bairro": "Bela Vista",
      "cidade": "São Paulo",
      "estado": "SP",
      "complemento": "Apto 101"
    },
    "plano": "gratuito"
  }
}
```

**Campos Obrigatórios:**
- `nome` (string, 2-255 caracteres)
- `email` (email válido, único)
- `nomeLoja` (string, 2-255 caracteres)
- `quantidadeFuncionarios` (integer, mínimo 1)
- `endereco` (objeto com campos abaixo)
  - `cep` (string, exatamente 8 dígitos)
  - `logradouro` (string, mínimo 2 caracteres)
  - `bairro` (string, mínimo 2 caracteres)
  - `cidade` (string, mínimo 2 caracteres)
  - `estado` (string, exatamente 2 caracteres)
  - `complemento` (string, opcional)
- `plano` (enum: "gratuito" | "premium")

**Response (201 Created):**

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "nome": "João Silva",
      "email": "joao@example.com",
      "nomeLoja": "Loja do João",
      "quantidadeFuncionarios": 3,
      "endereco": {
        "cep": "01310100",
        "logradouro": "Avenida Paulista",
        "bairro": "Bela Vista",
        "cidade": "São Paulo",
        "estado": "SP",
        "complemento": "Apto 101"
      },
      "plano": "gratuito",
      "createdAt": "2024-01-01T12:00:00.000Z",
      "updatedAt": "2024-01-01T12:00:00.000Z"
    }
  }
}
```

**Response (400 Bad Request):**

```json
{
  "error": {
    "status": 400,
    "message": "Campo obrigatório ausente: nome"
  }
}
```

**Response (409 Conflict - Email duplicado):**

```json
{
  "error": {
    "status": 409,
    "message": "Este email já está cadastrado. Faça login ou use outro email."
  }
}
```

**Response (429 Too Many Requests - Rate Limit):**

```json
{
  "error": {
    "status": 429,
    "message": "Muitas requisições. Por favor, tente novamente em alguns instantes."
  }
}
```

**Response (500 Internal Server Error):**

```json
{
  "error": {
    "status": 500,
    "message": "Erro no servidor. Tente novamente mais tarde."
  }
}
```

---

### 2. Listar Signups

Lista todos os cadastros (apenas admin).

**Endpoint**: `GET /api/signups`

**Autenticação**: Requerida (Admin)

**Query Parameters:**

- `pagination[page]` (integer, padrão: 1) - Número da página
- `pagination[pageSize]` (integer, padrão: 25, máximo: 100) - Itens por página
- `sort` (string) - Ordenação (ex: "createdAt:desc")
- `filters` (object) - Filtros (ex: `filters[plano][$eq]=premium`)

**Exemplo de Request:**

```http
GET /api/signups?pagination[page]=1&pagination[pageSize]=10&sort=createdAt:desc
Authorization: Bearer <admin-jwt-token>
```

**Response (200 OK):**

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "nome": "João Silva",
        "email": "joao@example.com",
        "nomeLoja": "Loja do João",
        "quantidadeFuncionarios": 3,
        "endereco": {
          "cep": "01310100",
          "logradouro": "Avenida Paulista",
          "bairro": "Bela Vista",
          "cidade": "São Paulo",
          "estado": "SP",
          "complemento": "Apto 101"
        },
        "plano": "gratuito",
        "createdAt": "2024-01-01T12:00:00.000Z",
        "updatedAt": "2024-01-01T12:00:00.000Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

**Response (403 Forbidden):**

```json
{
  "error": {
    "status": 403,
    "message": "Acesso negado"
  }
}
```

---

### 3. Buscar Signup por ID

Busca um cadastro específico (apenas admin).

**Endpoint**: `GET /api/signups/:id`

**Autenticação**: Requerida (Admin)

**Path Parameters:**

- `id` (integer) - ID do signup

**Exemplo de Request:**

```http
GET /api/signups/1
Authorization: Bearer <admin-jwt-token>
```

**Response (200 OK):**

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "nome": "João Silva",
      "email": "joao@example.com",
      "nomeLoja": "Loja do João",
      "quantidadeFuncionarios": 3,
      "endereco": {
        "cep": "01310100",
        "logradouro": "Avenida Paulista",
        "bairro": "Bela Vista",
        "cidade": "São Paulo",
        "estado": "SP",
        "complemento": "Apto 101"
      },
      "plano": "gratuito",
      "createdAt": "2024-01-01T12:00:00.000Z",
      "updatedAt": "2024-01-01T12:00:00.000Z"
    }
  }
}
```

**Response (404 Not Found):**

```json
{
  "error": {
    "status": 404,
    "message": "Not found"
  }
}
```

---

### 4. Estatísticas de Signups

Retorna estatísticas dos cadastros (apenas admin).

**Endpoint**: `GET /api/signups/stats`

**Autenticação**: Requerida (Admin)

**Exemplo de Request:**

```http
GET /api/signups/stats
Authorization: Bearer <admin-jwt-token>
```

**Response (200 OK):**

```json
{
  "data": {
    "total": 150,
    "byPlan": {
      "gratuito": 120,
      "premium": 30,
      "total": 150
    }
  }
}
```

---

## Validações

### Validações no Backend

O backend valida os seguintes campos:

1. **Campos obrigatórios**: Todos os campos marcados como obrigatórios devem estar presentes
2. **Email único**: O email não pode estar duplicado
3. **Formato de email**: Deve ser um email válido
4. **Plano**: Deve ser "gratuito" ou "premium"
5. **Quantidade de funcionários**: Deve ser pelo menos 1
6. **CEP**: Deve ter exatamente 8 dígitos
7. **Estado**: Deve ter exatamente 2 caracteres
8. **Tamanhos mínimos**: Nome, nomeLoja, logradouro, bairro, cidade devem ter pelo menos 2 caracteres

---

## Rate Limiting

O endpoint `POST /api/signups` possui rate limiting configurável:

- **Padrão**: 5 requisições por minuto por IP
- **Configurável via**: Variáveis de ambiente

Quando o limite é excedido, a API retorna:

```json
{
  "error": {
    "status": 429,
    "message": "Muitas requisições. Por favor, tente novamente em alguns instantes."
  }
}
```

---

## Códigos de Status HTTP

- `200 OK` - Requisição bem-sucedida
- `201 Created` - Recurso criado com sucesso
- `400 Bad Request` - Dados inválidos
- `403 Forbidden` - Acesso negado
- `404 Not Found` - Recurso não encontrado
- `409 Conflict` - Conflito (ex: email duplicado)
- `429 Too Many Requests` - Rate limit excedido
- `500 Internal Server Error` - Erro no servidor

---

## Exemplos de Uso

### cURL

#### Criar Signup

```bash
curl -X POST http://localhost:1337/api/signups \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "nome": "João Silva",
      "email": "joao@example.com",
      "nomeLoja": "Loja do João",
      "quantidadeFuncionarios": 3,
      "endereco": {
        "cep": "01310100",
        "logradouro": "Avenida Paulista",
        "bairro": "Bela Vista",
        "cidade": "São Paulo",
        "estado": "SP"
      },
      "plano": "gratuito"
    }
  }'
```

#### Listar Signups (Admin)

```bash
curl -X GET http://localhost:1337/api/signups \
  -H "Authorization: Bearer <admin-jwt-token>"
```

### JavaScript (Fetch)

```javascript
// Criar signup
const response = await fetch('http://localhost:1337/api/signups', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: {
      nome: 'João Silva',
      email: 'joao@example.com',
      nomeLoja: 'Loja do João',
      quantidadeFuncionarios: 3,
      endereco: {
        cep: '01310100',
        logradouro: 'Avenida Paulista',
        bairro: 'Bela Vista',
        cidade: 'São Paulo',
        estado: 'SP',
      },
      plano: 'gratuito',
    },
  }),
});

const result = await response.json();
```

---

## Tratamento de Erros

Todos os erros seguem o formato:

```json
{
  "error": {
    "status": <código-http>,
    "message": "<mensagem-de-erro>",
    "details": <detalhes-opcionais>
  }
}
```

---

## Changelog

### v1.0.0 (2024-01-01)
- Implementação inicial da API
- Endpoint POST /api/signups
- Endpoint GET /api/signups (admin)
- Endpoint GET /api/signups/:id (admin)
- Endpoint GET /api/signups/stats (admin)
- Rate limiting
- Validações completas

