<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list></cart-list>

    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "views/cart/childComps/CartList.vue";
import CartBottomBar from "views/cart/childComps/CartBottomBar.vue";

export default {
  name: "Cart",
  components: { NavBar, CartList, CartBottomBar },

  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.cart-nav-bar {
  position: fixed;
  background-color: var(--color-tint);
  font-weight: 700;
  z-index: 9;
}
</style>