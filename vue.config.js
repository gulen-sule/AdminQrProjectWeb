
module.exports = {
    devServer: {
        // This will forward any request that does not match a static file to localhost:3000
        proxy: 'http://192.168.1.88:8000'
    }
}