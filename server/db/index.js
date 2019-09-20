// 引入mongodb
let { MongoClient } = require('mongodb');
// 引入配置
let { MONGO_URL, ERRORS } = require('../consts');
console.log(MONGO_URL)
// 返回信息并关闭数据
function end(data, res, db) {
	// 如果是错误名称
	if (typeof data === 'string') {
		// 返回错误提示
		res.json(ERRORS[data])
	} else {
		// 返回错误对象
		res.json(data)
	}
	// 关闭数据
	db.close();
}

// 操作集合的方法
function collection(collectionName, res, callback) {
	// 链接数据库
	MongoClient.connect(MONGO_URL, (err, db) => {
		// 3.0  client.db('databasename')
		// 如果有错误
		if (err) {
			// // 返回错误
			// res.json(ERRORS.databaseError)
			// // 关闭数据库
			// db.close();
			// return;
			// 返回数据，并关闭数据库
			return end('databaseError', res, db)
		}
		// 没有错误，操作集合
		callback(db.collection(collectionName), db, res)
	})

}

// 暴露接口
module.exports = { collection, end }