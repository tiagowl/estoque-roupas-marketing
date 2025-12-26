#!/usr/bin/env node

/**
 * Script para gerar secrets seguros para o arquivo .env
 * 
 * Uso: node scripts/generate-secrets.js
 */

const crypto = require('crypto');

function generateSecret(length = 32) {
  return crypto.randomBytes(length).toString('base64');
}

console.log('Secrets gerados para .env:\n');
console.log(`APP_KEYS=${generateSecret()},${generateSecret()},${generateSecret()},${generateSecret()}`);
console.log(`API_TOKEN_SALT=${generateSecret()}`);
console.log(`ADMIN_JWT_SECRET=${generateSecret()}`);
console.log(`JWT_SECRET=${generateSecret()}`);
console.log(`TRANSFER_TOKEN_SALT=${generateSecret()}`);

