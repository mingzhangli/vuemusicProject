module.exports = {
    devServer: {
        proxy: {
            '^/api': { // '/api'是代理标识，一般是每个接口前的相同部分
                target: "http://127.0.0.1:3000/", // 请求地址，一般是服务器地址
                ws: true,
                changeOrigin: true, // 是否进行跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}
