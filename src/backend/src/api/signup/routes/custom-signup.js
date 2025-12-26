'use strict';

/**
 * Custom routes for signup
 * These routes are in addition to the default CRUD routes
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/signups/stats',
      handler: 'signup.getStats',
      config: {
        auth: {
          scope: ['find'],
        },
      },
    },
  ],
};

