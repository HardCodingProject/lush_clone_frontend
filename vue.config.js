module.exports ={
    devServer : {
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
            }
        }
    }
};