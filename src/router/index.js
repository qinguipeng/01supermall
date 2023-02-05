import Vue from "vue";
import VueRouter from 'vue-router'

// 路由懒加载
const Home = () =>
    import ('views/home/Home')
const Category = () =>
    import ('views/category/Category')
const Cart = () =>
    import ('views/cart/Cart')
const Profile = () =>
    import ('views/profile/Profile')

// 1. 安装VueRouter插件
Vue.use(VueRouter)


// 配置routes路径
const routes = [{
        path: '/',
        redirect: 'home'
    }, {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/profile',
        component: Profile,
    },
]

// 2. 创建VueRouter({})实例
const router = new VueRouter({
    routes,
    mode: "history"
})

// 3. 导出实例
export default router