// 1.引入mockjs
import Mock from 'mockjs'


// 2. 准备好json数据banner.json

// 3.引入json数据
import banner from './banner.json'

// 4. mock(url,data)数据，到时候请求的就是这里面的data
Mock.mock("/mock/banner", { code: 200, data: banner })

// 5.在network文件夹新增mockRequest.js