// 接口
module.exports = (req, res) => {
	// 获取ua
	// let ua = req.header('User-Agent')
	// // console.log(ua)
	// // 是否是移动端
	// if (/mobile/i.test(ua)) {
		// 渲染移动端的
		res.render('admin.html', {
			title: '爱创课堂'
		})
	// } else {
	// 	res.render('index.html')
	// }
	// res.json('success')
}