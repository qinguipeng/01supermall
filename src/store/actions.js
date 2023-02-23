// 请求轮播图数据
import { getBannerImages } from "network/home";


export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            // payloadh是最新添加商品

            // 查找之前购物车中是否有该商品，arr.find(()=>{return (需要返回的条件，条件符合，则返回符合条件的第一项，否则返回false)})是找到返回符合条件的项，并返回第一项
            let oldProdunct = context.state.cartList.find(function(item) {
                return item.iid === payload.iid
            })


            // 2. 根据oldProdunct，判断是新添加一个商品  还是已有商品数量加1
            if (oldProdunct) {
                // oldProdunct.count += 1
                context.commit("addCounter", oldProdunct)
                resolve("当前商品数量+1")
            } else {
                payload.count = 1
                    // state.cartList.push(payload)
                context.commit("addToCart", payload)
                resolve("添加购物车成功")
            }
        })

    },

    // 获取bannerlist数据（轮播图）
    // 1.Promise.then(()=>{})方法
    getBnnerList({ commit }) {
        getBannerImages().then((res) => {
            if (res.code == 200) { commit("GETBANNERLIST", res.data) }
        });
    }
    // 2. async...await方法


}