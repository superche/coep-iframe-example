module.exports = {
  port: 3000,
  files: ['./src/**/*.{html,js,css}'],
  server: {
    baseDir: './src',
  },
  middleware: [
    function (req, res, next) {
      if (req.url === '/') {
        res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
      }

      next();
    },
  ],
};
