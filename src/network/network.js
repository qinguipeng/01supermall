import axios from "axios";

// 请求相关
export function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/hy66",
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