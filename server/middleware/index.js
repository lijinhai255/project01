// 引入express
let express = require('express');
// 引入ejs
let ejs = require('ejs');
// 引入path
let path = require('path');
// session
let session = require('express-session');
// body-parser
let bodyParser = require('body-parser');
// 引入配置
let { STATICS } = require('../consts');

// 暴露接口
module.exports = app => {
	// 插值标志
	ejs.delimiter = '$';
	// 配置ejs
	app.engine('.html', ejs.__express)
	app.set('view engine', 'ejs')

	// 添加ssison
	app.use(session({
		secret: 'icketang',
		resave: true,
		saveUninitialized: false
	}))

	// json格式
	app.use(bodyParser.json())

	// 静态化资源
	for (let key in STATICS) {
		// key 是请求
		// STATICS[key] 静态的路径
		app.use(key, express.static(path.join(process.cwd(), STATICS[key])))
	}
	// app.use('/static/', express.static(path.join(process.cwd(), '/static/')))
	// app.use('/service-worker.js', express.static(path.join(process.cwd(), '/static/home/service-worker.js')))
	// app.use('/manifest.json', express.static(path.join(process.cwd(), '/static/home/manifest.json')))
	// app.use('/favicon.ico', express.static(path.join(process.cwd(), '/favicon.ico')))

	// mock数据请求静态化
	// app.use('/data/', (req, res, next) => {
	//     // 根据？切割字符串
	//     let arr = req.url.split('?')
	//     // 第一个成员添加拓展名
	//     arr[0] += '.json';
	//     // 合并数组
	//     req.url = arr.join('?');
	//     // 请求地址，添加拓展
	//     // req.url += '.json';
	//     // 执行next方法，进行下一步
	//     next();
	// }, express.static(path.join(process.cwd(), '/static/data/')))
}