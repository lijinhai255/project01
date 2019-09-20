// 引入路由
let { Router } = require('express');
// 引入home
let home = require('./home');
// 后台管理系统
let admin = require('./admin');
// 实例化路由
let router = new Router();

// 定义请求
module.exports = router
	.get('/', home)
	// 后台页面
	.get('/admin/', admin)
