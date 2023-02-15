// import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

//导入index.js默认导出的对象
import toast from 'components/common/toast'

Vue.config.productionTip = false

// 添加事件总线对象
//Vue 实例可作为事件总线,接受任何组件通过this.$bus.$emit('发射的事件')，然后在任何组件中都可以通过this.$bus.$on('发射的事件',()=>{操作}) 接受事件进行操作
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')