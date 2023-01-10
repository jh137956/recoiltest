const { createProxyMiddleware } = require('http-proxy-middleware');
export const proxy = () => {
    module.exports = function(app: any) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:8080',
          changeOrigin: true,
        })
      );
    };
}
