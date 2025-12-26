'use strict';

/**
 * signup controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::signup.signup', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { data } = ctx.request.body;

      // Validação adicional no backend
      if (!data) {
        return ctx.badRequest('Dados não fornecidos');
      }

      // Validar campos obrigatórios
      const requiredFields = ['nome', 'email', 'nomeLoja', 'quantidadeFuncionarios', 'endereco', 'plano'];
      for (const field of requiredFields) {
        if (!data[field]) {
          return ctx.badRequest(`Campo obrigatório ausente: ${field}`);
        }
      }

      // Validar email único
      const existingSignup = await strapi.db.query('api::signup.signup').findOne({
        where: { email: data.email },
      });

      if (existingSignup) {
        return ctx.conflict({
          error: {
            status: 409,
            message: 'Este email já está cadastrado. Faça login ou use outro email.',
          },
        });
      }

      // Validar plano
      if (!['gratuito', 'premium'].includes(data.plano)) {
        return ctx.badRequest('Plano inválido. Deve ser "gratuito" ou "premium"');
      }

      // Validar quantidade de funcionários
      if (data.quantidadeFuncionarios < 1) {
        return ctx.badRequest('Quantidade de funcionários deve ser pelo menos 1');
      }

      // Validar endereço
      if (!data.endereco.cep || data.endereco.cep.length !== 8) {
        return ctx.badRequest('CEP deve ter 8 dígitos');
      }

      // Criar o signup
      const entity = await strapi.entityService.create('api::signup.signup', {
        data: {
          ...data,
          publishedAt: new Date(), // Publicar automaticamente
        },
      });

      // Retornar resposta formatada
      return ctx.created({
        data: {
          id: entity.id,
          attributes: {
            nome: entity.nome,
            email: entity.email,
            nomeLoja: entity.nomeLoja,
            quantidadeFuncionarios: entity.quantidadeFuncionarios,
            endereco: entity.endereco,
            plano: entity.plano,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
          },
        },
      });
    } catch (error) {
      strapi.log.error('Error creating signup:', error);
      
      // Tratar erros específicos
      if (error.name === 'ValidationError') {
        return ctx.badRequest({
          error: {
            status: 400,
            message: 'Erro de validação',
            details: error.details,
          },
        });
      }

      // Erro genérico
      return ctx.internalServerError({
        error: {
          status: 500,
          message: 'Erro no servidor. Tente novamente mais tarde.',
        },
      });
    }
  },

  async find(ctx) {
    // Apenas admin pode listar signups
    const { user } = ctx.state;
    if (!user || user.role.type !== 'admin') {
      return ctx.forbidden('Acesso negado');
    }

    return super.find(ctx);
  },

  async findOne(ctx) {
    // Apenas admin pode ver signup específico
    const { user } = ctx.state;
    if (!user || user.role.type !== 'admin') {
      return ctx.forbidden('Acesso negado');
    }

    return super.findOne(ctx);
  },

  /**
   * Estatísticas de signups (apenas admin)
   */
  async getStats(ctx) {
    try {
      const { user } = ctx.state;
      if (!user || user.role.type !== 'admin') {
        return ctx.forbidden('Acesso negado');
      }

      const signupService = strapi.service('api::signup.signup');
      const [total, byPlan] = await Promise.all([
        signupService.count(),
        signupService.countByPlan(),
      ]);

      return ctx.send({
        data: {
          total,
          byPlan,
        },
      });
    } catch (error) {
      strapi.log.error('Error getting stats:', error);
      return ctx.internalServerError({
        error: {
          status: 500,
          message: 'Erro ao buscar estatísticas',
        },
      });
    }
  },
}));

