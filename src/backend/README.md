# Backend - Strapi 5

Backend do site de marketing do micro SaaS de controle de estoque, desenvolvido com Strapi 5.

## 📋 Requisitos

- Node.js 18.x LTS ou superior
- npm 9.x ou superior
- PostgreSQL 14+ (produção) ou SQLite (desenvolvimento)

## 🚀 Instalação

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=estoque_roupas
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi

# Para desenvolvimento com SQLite (mais simples)
# DATABASE_CLIENT=better-sqlite3
# DATABASE_FILENAME=.tmp/data.db

# CORS - Adicione a URL do frontend
CORS_ORIGIN=http://localhost:3000

# Secrets - Gere valores aleatórios seguros
APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
```

### 3. Gerar secrets (opcional)

Para gerar secrets seguros, você pode usar:

```bash
# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Ou online: https://generate-secret.vercel.app/32
```

### 4. Configurar banco de dados

#### Opção A: PostgreSQL (Recomendado para produção)

1. Instale PostgreSQL
2. Crie o banco de dados:

```sql
CREATE DATABASE estoque_roupas;
CREATE USER strapi WITH PASSWORD 'strapi';
GRANT ALL PRIVILEGES ON DATABASE estoque_roupas TO strapi;
```

#### Opção B: SQLite (Desenvolvimento)

Configure no `.env`:

```env
DATABASE_CLIENT=better-sqlite3
DATABASE_FILENAME=.tmp/data.db
```

### 5. Iniciar o servidor

```bash
# Modo desenvolvimento
npm run develop

# Modo produção
npm run build
npm run start
```

O servidor estará disponível em: `http://localhost:1337`

O admin panel estará em: `http://localhost:1337/admin`

## 📚 Estrutura do Projeto

```
src/backend/
├── config/              # Configurações
│   ├── database.js     # Configuração do banco de dados
│   ├── server.js       # Configuração do servidor
│   ├── admin.js        # Configuração do admin
│   ├── api.js          # Configuração da API
│   ├── middlewares.js  # Middlewares
│   ├── cors.js         # CORS
│   └── plugins.js      # Plugins
├── src/
│   ├── api/
│   │   └── signup/     # Content Type Signup
│   │       ├── content-types/
│   │       │   └── signup/
│   │       │       └── schema.json
│   │       ├── controllers/
│   │       │   └── signup.js
│   │       ├── routes/
│   │       │   └── signup.js
│   │       └── services/
│   │           └── signup.js
│   ├── components/
│   │   └── endereco/   # Componente Endereço
│   │       └── schema.json
│   └── middlewares/
│       └── rate-limit.js  # Rate limiting
└── package.json
```

## 🔌 API Endpoints

### POST /api/signups

Cria um novo cadastro.

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
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
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

**Response (400 Bad Request):**
```json
{
  "error": {
    "status": 400,
    "message": "Campo obrigatório ausente: nome"
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

### GET /api/signups

Lista todos os cadastros (apenas admin).

**Headers:**
```
Authorization: Bearer <admin-jwt-token>
```

### GET /api/signups/:id

Busca um cadastro específico (apenas admin).

**Headers:**
```
Authorization: Bearer <admin-jwt-token>
```

## 🔒 Segurança

### Rate Limiting

O endpoint de criação de signup possui rate limiting configurável:

- **Padrão**: 5 requisições por minuto por IP
- **Configurável via**: Variáveis de ambiente

```env
RATE_LIMIT_ENABLED=true
RATE_LIMIT_WINDOW_MS=60000  # 1 minuto em milissegundos
RATE_LIMIT_MAX_REQUESTS=5
```

### CORS

CORS está configurado para permitir requisições do frontend. Configure no `.env`:

```env
CORS_ORIGIN=http://localhost:3000,https://yourdomain.com
```

### Validação

- Validação de campos obrigatórios
- Validação de formato de email
- Validação de email único
- Validação de plano (gratuito/premium)
- Validação de quantidade de funcionários (mínimo 1)
- Validação de CEP (8 dígitos)

## 📊 Content Types

### Signup

Armazena os cadastros de usuários interessados no produto.

**Campos:**
- `nome` (string, obrigatório, 2-255 caracteres)
- `email` (email, obrigatório, único, 255 caracteres)
- `nomeLoja` (string, obrigatório, 2-255 caracteres)
- `quantidadeFuncionarios` (integer, obrigatório, mínimo 1)
- `endereco` (component, obrigatório)
- `plano` (enum: 'gratuito' | 'premium', obrigatório, padrão: 'gratuito')

### Component: Endereço

Componente reutilizável para endereços.

**Campos:**
- `cep` (string, obrigatório, 8 caracteres)
- `logradouro` (string, obrigatório, mínimo 2 caracteres)
- `bairro` (string, obrigatório, mínimo 2 caracteres)
- `cidade` (string, obrigatório, mínimo 2 caracteres)
- `estado` (string, obrigatório, 2 caracteres)
- `complemento` (string, opcional)

## 🧪 Testes

Para executar testes (quando implementados):

```bash
npm test
```

## 🚢 Deploy

### Strapi Cloud

1. Conecte seu repositório ao Strapi Cloud
2. Configure as variáveis de ambiente
3. Deploy automático

### VPS (DigitalOcean, AWS EC2, etc.)

1. Clone o repositório no servidor
2. Configure `.env` com variáveis de produção
3. Instale dependências: `npm install --production`
4. Build: `npm run build`
5. Inicie: `npm run start`

### Docker (Opcional)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
```

## 📝 Permissões

### Configurar Permissões no Admin Panel

1. Acesse: `http://localhost:1337/admin`
2. Vá em: Settings > Users & Permissions Plugin > Roles > Public
3. Marque a permissão: `Signup > create`
4. Salve

Isso permite que qualquer pessoa crie signups sem autenticação.

## 🔧 Troubleshooting

### Erro: Database connection failed

- Verifique se o PostgreSQL está rodando
- Verifique as credenciais no `.env`
- Verifique se o banco de dados existe

### Erro: Port 1337 already in use

```bash
# Linux/Mac
lsof -ti:1337 | xargs kill -9

# Windows
netstat -ano | findstr :1337
taskkill /PID <PID> /F
```

### Erro: APP_KEYS not set

Gere novos keys no `.env`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 📚 Documentação

- [Strapi 5 Documentation](https://docs.strapi.io/)
- [Strapi API Reference](https://docs.strapi.io/dev-docs/api/rest)

## 📄 Licença

MIT

