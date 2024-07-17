const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api', // Replace with your API endpoint path
        createProxyMiddleware({
            target: 'http://localhost:5173', // Replace with your server's address
            changeOrigin: true,
        })
    );
};
