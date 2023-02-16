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
const Detail = () =>
    import ('views/detail/Detail')
    // 1. 安装VueRouter插件
Vue.use(VueRouter)


// 配置routes路径



const routes = [{
        path: '/',
        redirect: 'home'
    }, {
        path: '/home',
        component: Home,
        meta: {
            title: "首页"
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            title: "分类"
        },
        // 使用router独享守卫
        beforeEnter: (to, from, next) => {
            // ...
            console.log('/category' + "这个路由独享守卫，只有进入 分类 前才能打印");
            next()
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            title: "购物车"
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: "我的"
        }
    },
    {
        path: '/detail/:iid',
        component: Detail,
        meta: {
            title: "商品详情"
        }
    },
]


// 2. 创建VueRouter({})实例
const router = new VueRouter({
    routes,
    mode: "history"
})


// 全局导航守卫使用,  .to就是前面定义的所有[{route1},{route2},/]路由对象
router.beforeEach((to, from, next) => {
        console.log(to, 'to是上面定义的一个个route对象');
        document.title = to.meta.title
        next()
    })
    // 3. 导出实例
export default router