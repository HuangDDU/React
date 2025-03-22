const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/api1',
		createProxyMiddleware({
			target: 'http://localhost:5000', // 转发目标
			changeOrigin: true, // 控制服务器收到的请求头中Host的值
			pathRewrite: { '^/api1:': '' } // 重写请求路径
		})
	)
	app.use(
		'/api2',
		createProxyMiddleware({
			target: 'http://localhost:5001',
			changeOrigin: true,
			pathRewrite: { '^/api2:': '' }
		})
	)

}
