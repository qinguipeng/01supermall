import axios from "axios";

// 5. 封装请求
export function mockReq(config) {

    // 1.创建axios实例
    const instance = axios.create({
        baseURL: "/mock",
        timeout: 5000
    })

    //2. 请求拦截器
    instance.interceptors.request.use((config) => {
        // config里面有请求头
        return config
    })



    // 3. 响应拦截器
    instance.interceptors.response.use((res) => {
        return res.data
    }, (err) => {
        throw err
    })

    // 4. 导出实例
    return instance(config)


}