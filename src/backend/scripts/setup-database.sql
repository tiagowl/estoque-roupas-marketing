-- Script SQL para criar banco de dados PostgreSQL
-- Execute este script como superuser do PostgreSQL

-- Criar banco de dados
CREATE DATABASE estoque_roupas;

-- Criar usuário
CREATE USER strapi WITH PASSWORD 'strapi';

-- Conceder privilégios
GRANT ALL PRIVILEGES ON DATABASE estoque_roupas TO strapi;

-- Conectar ao banco de dados
\c estoque_roupas

-- Conceder privilégios no schema public
GRANT ALL ON SCHEMA public TO strapi;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO strapi;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO strapi;

-- Para futuras tabelas
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO strapi;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO strapi;

