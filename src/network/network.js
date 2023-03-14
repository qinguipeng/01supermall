import axios from "axios";

// 请求相关
export function request(config) {
    const instance = axios.create({
        baseURL: "http://123.207.32.32:7888/api/hy66",
        timeout: 5000
    })

    // 增加一个响应拦截器
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        throw err
    })


    // 数据请求
    return instance(config)
}