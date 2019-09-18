//基于express 搭建的服务器

let express = require("express")

// 5 引入ejs 

let ejs = require('ejs')
// 6 启动服务器

let http = require("http")
let https = require('https');
// 引入fs
let fs = require('fs');

// 9 引入path
// 引入path
let path = require('path');
//2 创建应用程序
let app = express()

// 4 配置ejs
app.engine('.html',ejs.__express)
app.set('view engine','ejs')
// 引入秘钥文件, __dirname, process.cwd()
let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

// 3 定义请求

app.get("/",(req,res)=>{
    //渲染模板引擎
    res.render('home.html')//配置ejs 模板引擎
})

// 8 静态化资源
// 静态化资源
app.use('/static/', express.static(path.join(process.cwd(), '/static/')))
app.use('/service-worker.js', express.static(path.join(process.cwd(), '/static/home/service-worker.js')))
app.use('/manifest.json', express.static(path.join(process.cwd(), '/static/home/manifest.json')))

// mock数据请求静态化
app.use('/data/', (req, res, next) => {
    // 根据？切割字符串
    let arr = req.url.split('?')
    // 第一个成员添加拓展名
    arr[0] += '.json';
    // 合并数组
    req.url = arr.join('?');
    // 请求地址，添加拓展
    // req.url += '.json';
    // 执行next方法，进行下一步
    next();
}, express.static(path.join(process.cwd(), '/static/data/')))

//7 启动http服务

http.createServer(app)
    .listen(3010,res=>console.log("http port listen at 3010"))
// https服务
https.createServer({ key, cert }, app)
    .listen(3011, res => console.log('http port listen at 3011'))


