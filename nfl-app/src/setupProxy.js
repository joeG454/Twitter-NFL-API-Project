const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/twitterApi',
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
    })
  );
};