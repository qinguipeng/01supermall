export default {
    addCart(context, payload) {
        // payloadh是最新添加商品

        // 查找之前购物车中是否有该商品，arr.find(()=>{return (需要返回的条件，条件符合，则返回符合条件的第一项，否则返回false)})是找到返回符合条件的项，并返回第一项
        let oldProdunct = context.state.cartList.find(function(item) {
            return item.iid === payload.iid
        })


        // 2. 根据oldProdunct，判断是新添加一个商品  还是已有商品数量加1
        if (oldProdunct) {
            // oldProdunct.count += 1
            context.commit("addCounter", oldProdunct)
        } else {
            payload.count = 1
                // state.cartList.push(payload)
            context.commit("addToCart", payload)
        }

    }
}