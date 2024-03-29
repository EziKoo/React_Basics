const proxy = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    // 遇见/api1前缀的请求，就会触发该代理配置
    proxy('/api1', {
      target: "http://localhost:5000",  // 请求转发给谁
      changeOrigin: true,               // 控制服务器收到的请求头中host字段的值
      pathRewrite: {'^/api1': ''}       // 重写请求路劲（必须）
    }),
    proxy('/api2', {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    }),
  )
}