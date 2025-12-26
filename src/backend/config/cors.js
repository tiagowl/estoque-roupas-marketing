module.exports = {
  enabled: true,
  origin: process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',')
    : ['http://localhost:3000'],
  credentials: true,
  headers: [
    'Content-Type',
    'Authorization',
    'X-Frame-Options',
    'X-Requested-With',
  ],
};

