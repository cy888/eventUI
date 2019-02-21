// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    // TODO 联调使用
    proxy: {
        "/api": {
            target: "http://10.100.100.92:8080",
            changeOrigin: true,
            pathRewrite: { "^/api": "" }
        }
    },
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: { webpackChunkName: true },
            title: '告警事件集中管理平台',
            dll: true,
            routes: {
                exclude: [

                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,

                    /components\//,
                ],
            },
        }],
    ],
}
