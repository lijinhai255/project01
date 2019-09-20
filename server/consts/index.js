// 定义配置
module.exports = {
    // 端口
    HTTP_PORT: 3000,
    HTTPS_PORT: 3001,
    // 数据库信息
    MONGO_URL: 'mongodb://localhost:27017/ickt_22_react',
    // 静态化配置
    STATICS: {
        '/static/': '/static/',
        '/service-worker.js': '/static/home/service-worker.js',
        '/manifest.json': '/static/home/manifest.json',
        '/favicon.ico': '/favicon.ico'
    },
    // 所有错误码
    ERRORS: {
        // 没有错误
        success: { errno: 0, msg: 'success' },
        // 数据库链接错误
        databaseError: { errno: 1, msg: '数据库错误' },
        // 集合插入错误
        collectionInsertError: { errno: 2, msg: '数据库错误' },
        // 没有插入信息
        collectionInsertNoData: { errno: 3, msg: '数据库错误' },
        // 查询错误
        collectionFindError: { errno: 4, msg: '数据库错误' },
        // 用户名密码错误
        loginError: { errno: 5, msg: '用户名密码错误' },
    }
}