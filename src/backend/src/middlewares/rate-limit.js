'use strict';

// Implementação simples de rate limiting sem dependências externas
const requestStore = new Map();

function getClientIP(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}

function cleanup() {
  const now = Date.now();
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10);
  
  for (const [key, value] of requestStore.entries()) {
    if (now - value.firstRequest > windowMs) {
      requestStore.delete(key);
    }
  }
}

// Limpar store a cada minuto
setInterval(cleanup, 60000);

module.exports = (config, { strapi }) => {
  const enabled = process.env.RATE_LIMIT_ENABLED === 'true';
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10);
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5', 10);

  if (!enabled) {
    return async (ctx, next) => next();
  }

  return async (ctx, next) => {
    // Aplicar rate limit apenas em rotas de signup POST
    if (ctx.request.path.includes('/api/signups') && ctx.request.method === 'POST') {
      const clientIP = getClientIP(ctx.request);
      const now = Date.now();
      const key = `signup:${clientIP}`;

      const clientData = requestStore.get(key);

      if (!clientData) {
        // Primeira requisição deste IP
        requestStore.set(key, {
          count: 1,
          firstRequest: now,
        });
        return next();
      }

      // Verificar se ainda está na janela de tempo
      if (now - clientData.firstRequest > windowMs) {
        // Janela expirou, resetar
        requestStore.set(key, {
          count: 1,
          firstRequest: now,
        });
        return next();
      }

      // Incrementar contador
      clientData.count += 1;

      // Verificar se excedeu o limite
      if (clientData.count > maxRequests) {
        ctx.status = 429;
        ctx.body = {
          error: {
            status: 429,
            message: 'Muitas requisições. Por favor, tente novamente em alguns instantes.',
          },
        };
        return;
      }

      // Atualizar store
      requestStore.set(key, clientData);
    }

    return next();
  };
};

