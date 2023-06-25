const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/link",
    createProxyMiddleware({
      target: "https://rickandmortyapi.com/api",
      pathRewrite: {
        "^/link": "",
      },
      changeOrigin: true,
    })
  );
};
