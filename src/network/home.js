// Home.vue相关请求集中处理，一并封装

import { request } from './network'
// 首页商品列表数据请求封装
export function getHomeGoods(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    })
}





import { mockReq } from './mockRequest'
// banner轮播图数据请求封装

export function getBannerImages() {
    return mockReq({
        url: "/banner",
        methods: "get"

    })
}