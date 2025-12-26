'use strict';

/**
 * signup router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::signup.signup', {
  config: {
    find: {
      middlewares: ['plugin::users-permissions.permissions'],
      policies: [],
    },
    findOne: {
      middlewares: ['plugin::users-permissions.permissions'],
      policies: [],
    },
    create: {
      middlewares: ['plugin::users-permissions.permissions'],
      policies: [],
      auth: false, // Permitir criação sem autenticação (público)
    },
    update: {
      middlewares: ['plugin::users-permissions.permissions'],
      policies: [],
    },
    delete: {
      middlewares: ['plugin::users-permissions.permissions'],
      policies: [],
    },
  },
});

