// 引入Router
let { Router } = require('express');

// 登录
let managerLogin = require('./manager/login');

// 路由中间件
let router = new Router();

// 定义路由，并暴露接口
module.exports = router
	// post
	// 登录
	.post('/admin/login', managerLogin)