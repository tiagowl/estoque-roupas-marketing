'use strict';

/**
 * Lifecycle callbacks for the `signup` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // async beforeCreate(event) {
  //   const { data, where, select, populate } = event.params;
  // },

  // After saving a value.
  // Fired after an `insert` or `update` query.
  async afterCreate(event) {
    const { result } = event;
    
    // Log do novo signup (opcional)
    strapi.log.info(`Novo signup criado: ${result.email} - Plano: ${result.plano}`);
    
    // Aqui você pode adicionar lógica adicional, como:
    // - Enviar email de confirmação
    // - Notificar administradores
    // - Integrar com serviços externos
  },

  // Before updating a value.
  // Fired before an `update` query.
  // async beforeUpdate(event) {
  //   const { data, where, select, populate } = event.params;
  // },

  // After updating a value.
  // Fired after an `update` query.
  // async afterUpdate(event) {
  //   const { result, params } = event;
  // },

  // Before deleting a value.
  // Fired before a `delete` query.
  // async beforeDelete(event) {
  //   const { where, select, populate } = event.params;
  // },

  // After deleting a value.
  // Fired after a `delete` query.
  // async afterDelete(event) {
  //   const { result, params } = event;
  // },
};

