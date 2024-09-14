module.exports = ({ env }) => ({
  'io': {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: {
          origin: env('CLIENT_URL', '*'),
        },
      },
      contentTypes: [
        'product',  // Monitor the Product collection for changes
        'user'      // Monitor the User collection for changes
      ],
    },
  },
});
