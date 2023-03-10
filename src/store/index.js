import Vue from "vue";
import Vuex from 'vuex'

import mutations from './mutations'
import actions from "./actions"
import getters from './getter'


// 1.安装插件
Vue.use(Vuex)

// 2.创建store 对象
const state = { cartList: [], bannerList: [] }

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})


// 3.导出
export default store