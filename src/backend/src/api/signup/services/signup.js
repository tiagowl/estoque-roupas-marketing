'use strict';

/**
 * signup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::signup.signup', ({ strapi }) => ({
  /**
   * Verifica se email já existe
   */
  async emailExists(email) {
    const signup = await strapi.db.query('api::signup.signup').findOne({
      where: { email },
    });
    return !!signup;
  },

  /**
   * Busca signup por email
   */
  async findByEmail(email) {
    return await strapi.db.query('api::signup.signup').findOne({
      where: { email },
    });
  },

  /**
   * Conta total de signups
   */
  async count() {
    return await strapi.db.query('api::signup.signup').count();
  },

  /**
   * Conta signups por plano
   */
  async countByPlan() {
    const [gratuito, premium] = await Promise.all([
      strapi.db.query('api::signup.signup').count({ where: { plano: 'gratuito' } }),
      strapi.db.query('api::signup.signup').count({ where: { plano: 'premium' } }),
    ]);

    return {
      gratuito,
      premium,
      total: gratuito + premium,
    };
  },
}));

