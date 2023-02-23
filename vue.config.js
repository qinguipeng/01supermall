const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "common": "@/common",
                "components": "@/components",
                "mock": "@/mock",
                "network": "@/network",
                "store": "@/store",
                "router": "@/router",
                "views": "@/views",
            }
        }
    }
}