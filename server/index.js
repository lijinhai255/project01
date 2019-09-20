// 引入express
let express = require('express');
// 引入服务器模块
let server = require('./server');
// 引入中间件模块
let middleware = require('./middleware');
// 引入路由配置
let router = require('./router');

// 创建应用程序
let app = express();

// 启动服务器
server(app);
// 配置中间件
middleware(app);
// 启动路由
router(app);


// // 测试数据库
// let { collection, end } = require('./db');
// // 测试地址
// app.get('/test', (req, res) => {
// 	// 使用
// 	collection('test', res, (colls, db) => {
// 		// 插入数据
// 		colls.insertOne({ title: '爱创课堂' }, (err, data) => {
// 			// 如果有错误
// 			if (err) {
// 				return end('collectionInsertError', res, db)
// 			}
// 			// 插入数据成功
// 			if (data.result.n > 0) {
// 				return end('success', res, db)
// 			}
// 			// 没有插入数据
// 			end('collectionInsertNoData', res, db)
// 			// console.log(err, result)
// 		})
// 	})
// })


