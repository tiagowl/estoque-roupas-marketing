FROM node:18-alpine

# Instalar dependências do sistema para better-sqlite3
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Expor porta
EXPOSE 1337

# Comando para iniciar
CMD ["npm", "run", "start"]

