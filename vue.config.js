const path = require('path');
module.exports ={
    publicPath: process.env.BASE_URL,
    assetsDir: process.env.BASE_URL, 
    devServer : {
        historyApiFallback: true,
        contentBase: path.join(__dirname, ''), // 설정하면 url(/src/assets") 경로 사용 가능
        proxy : {
            // '/': {
            //     target: 'http://localhost:3000',
            //     changeOrigin: true,
            //     logLevel: 'debug',
            // },
            '/member': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                logLevel: 'debug',
            },
            '/product': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                logLevel: 'debug',
            },
            '/order': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                logLevel: 'debug',
            }
        }
    }
};