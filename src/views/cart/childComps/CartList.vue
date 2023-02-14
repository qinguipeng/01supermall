<template>
  <div class="cart-list">
    <scroll class="wrapper" ref="scroll">
      <cart-list-item
        v-for="(item, index) in $store.state.cartList"
        :key="index"
        :item-info="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>


<script>
import scroll from "components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  components: { scroll, CartListItem },
  computed: {},
  activated() {
    // console.log("--------");
    this.$refs.scroll.refresh();
    // console.log(this.$refs.scroll.scroll.scrollerHeight);
  },
};
</script>


<style scoped>
.cart-list {
  padding-top: 44px;
  /* position: relative; */
  height: 100vh;
}
.wrapper {
  /* margin-top: 44px; */
  height: calc(100% - 109px);
}
</style>