module.exports = {
  'users-permissions': {
    enabled: true,
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: process.env.JWT_SECRET,
    },
  },
  i18n: {
    enabled: true,
  },
};

