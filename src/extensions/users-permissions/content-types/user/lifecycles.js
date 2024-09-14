module.exports = {
    async afterCreate(event) {
      strapi.io.emit('user:create', event.result); // Emit WebSocket event on user creation
    },
    async afterUpdate(event) {
      strapi.io.emit('user:update', event.result); // Emit WebSocket event on user update
    },
    async afterDelete(event) {
      strapi.io.emit('user:delete', event.result); // Emit WebSocket event on user deletion
    },
  };
  