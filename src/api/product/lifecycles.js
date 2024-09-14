module.exports = {
    async afterCreate(event) {
      strapi.io.emit('product:create', event.result); // Send created product data
    },
    async afterUpdate(event) {
      strapi.io.emit('product:update', event.result); // Send updated product data
    },
    async afterDelete(event) {
      strapi.io.emit('product:delete', event.result); // Send deleted product data
    },
  };
  