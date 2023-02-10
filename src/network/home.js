// Home.vue相关请求集中处理，一并封装
import { request } from './network'




export function getHomeGoods(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    })
}