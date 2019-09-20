// 引入数据库模块
let { collection, end } = require('../../db');
// 接口
module.exports = (req, res) => {
	// console.log(req.body)
	// 查询集合
	collection('manager', res, (colls, db) => {
		// 查询数据
		colls.findOne(req.body, (err, data) => {
			// console.log(err, data)
			// 如果有错误
			if (err) {
				// 返回数据并关闭数据库
				return end('collectionFindError', res, db)
			}
			// 如果有数据
			if (data) {
				// 登录成功
				req.session.username = req.body.username;
				// 返回数据
				return end({ 
					errno: 0,
					data: req.body.username 
				}, res, db)
			}
			// 没有找到数据
			// 用户名或者密码错误
			end('loginError', res, db);
		})
	})
	// 插入一条数据
	// collection('manager', res, colls => colls.insertOne(req.body))
	// res.json('success')
}