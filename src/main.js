// import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 引用vue-easy-slider
// import EasySlider from 'vue-easy-slider'
// Vue.use(EasySlider)

//导入index.js默认导出的对象
import toast from 'components/common/toast'

Vue.config.productionTip = false

// 添加事件总线对象
//Vue 实例可作为事件总线,接受任何组件通过this.$bus.$emit('发射的事件')，然后在任何组件中都可以通过this.$bus.$on('发射的事件',()=>{操作}) 接受事件进行操作
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 解决移动端延迟300 ms fastclick方案
FastClick.attach(document.body);
// 使用vue图片懒加载vue-lazyload方案

//getBannerImages()axios网络请求mock数据测试
import "mock/mockServer.js"
// import { getBannerImages } from 'network/home'
// getBannerImages().then((res) => {
//     console.log(res);
// })


// 轮播图样式一次性引入
import "swiper/css/swiper.css"

Vue.use(VueLazyLoad)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')