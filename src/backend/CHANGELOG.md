# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2024-01-01

### Adicionado
- Content Type "Signup" com todos os campos necessários
- Component "Endereço" para armazenar dados de endereço
- Endpoint POST /api/signups para criação de cadastros (público)
- Endpoint GET /api/signups para listar cadastros (admin)
- Endpoint GET /api/signups/:id para buscar cadastro específico (admin)
- Endpoint GET /api/signups/stats para estatísticas (admin)
- Validação completa de dados no backend
- Rate limiting configurável para proteção contra spam
- Middleware de rate limiting customizado
- Validação de email único
- Validação de campos obrigatórios
- Validação de formato de dados
- Tratamento de erros robusto
- CORS configurável
- Suporte a PostgreSQL e SQLite
- Lifecycle hooks para signup
- Services customizados para signup
- Documentação completa da API
- Scripts de setup (geração de secrets, setup de database)
- Docker support (Dockerfile e docker-compose.yml)
- README completo com instruções de instalação

### Segurança
- Rate limiting implementado
- Validação de entrada no backend
- CORS configurado
- Proteção contra email duplicado
- Validação de todos os campos

### Performance
- Queries otimizadas
- Índices no banco de dados (via Strapi)
- Connection pooling configurado

