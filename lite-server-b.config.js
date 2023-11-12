module.exports = {
  port: 8000,
  files: ['./src/**/*.{html,js,css}'],
  server: {
    baseDir: './src',
  },
  ui: {
    "port": 8001,
  },
  middleware: [
    function (req, res, next) {
      if (req.url === '/iframe.html') {
        // INFO: both headers are required
        res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
      }

      next();
    },
  ],
};
