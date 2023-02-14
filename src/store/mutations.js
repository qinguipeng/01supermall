// import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'


export default {
    // mutatiom唯一的目的是修改state内部数据的状态
    // mutation设计的原则，mutation之中的每个方法尽可能比较简单一点。

    // addCart(state, payload) {
    //     // payloadh是最新添加商品

    //     // // 1.判断购物车是否已经存在当前商品item 
    //     // const oldProdunct = null
    //     // for (let item of state.cartList) {
    //     //     if (item.iid === payload.iid) {
    //     //         oldProdunct = item
    //     //     }
    //     // }

    //     // 查找之前购物车中是否有该商品，arr.find(()=>{return (需要返回的条件，条件符合，则返回符合条件的第一项，否则返回false)})是找到返回符合条件的项，并返回第一项
    //     let oldProdunct = state.cartList.find(function(item) {
    //         return item.iid === payload.iid
    //     })

    //     // 2. 根据oldProdunct，判断是新添加一个商品  还是已有商品数量加1
    //     if (oldProdunct) {
    //         oldProdunct.count += 1
    //     } else {
    //         payload.count = 1
    //         state.cartList.push(payload)
    //     }

    // 1. 数量+1
    addCounter(state, payload) {
        payload.count++
    },
    // 2. 加新商品
    addToCart(state, payload) {
        payload.checked = false;
        state.cartList.push(payload);

    }



}