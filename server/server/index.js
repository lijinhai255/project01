// 引入http和https
let http = require('http');
let https = require('https');
// 引入fs
let fs = require('fs');
// 引入path
let path = require('path');
// 引入端口号
let { HTTP_PORT, HTTPS_PORT } = require('../consts');

// 引入秘钥文件, __dirname, process.cwd()
let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

module.exports = app => {
	// 适配端口号
	let httpPort = +process.argv[2] || HTTP_PORT;
	let httpsPort = +process.argv[3] || (process.argv[2] && +process.argv[2] + 1) || HTTPS_PORT;
	// console.log(process.argv)
	// http服务
	http.createServer(app)
	    .listen(httpPort, res => console.log('http port listen at ' + httpPort))
	// https服务
	https.createServer({ key, cert }, app)
	    .listen(httpsPort, res => console.log('http port listen at ' + httpsPort))
}