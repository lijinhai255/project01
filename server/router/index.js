// 引入所有路由中间件
let page = require('../page');
// 引入后台路由中间件
let admin = require('../admin');

// 暴露接口
module.exports = app => {
	// 安装路由中间件
	app.use(page)
	// 安装路由中间件
	app.use(admin)
}