// import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() //Vue 实例可作为事件总线,接受任何组件通过this.$bus.$emit('发射的事件')，然后在任何组件中都可以通过this.$bus.$on('发射的事件',()=>{操作}) 接受事件进行操作

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')