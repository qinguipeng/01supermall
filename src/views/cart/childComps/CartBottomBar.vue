<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button class="check-button"></check-button>
      <span>全选</span>
    </div>

    <div class="center">合计：{{ totalPrice }}</div>

    <div class="right">去结算：{{ checkedLength }}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkedLength() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
  },
};
</script>


<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 65px;
  width: 100%;
  height: 40px;
  background-color: #eee;
  border: 0 0 0 10px solid #bbb;
  z-index: 10;
}

.left {
  position: relative;
  display: flex;
  padding-left: 10px;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 40px;
  /* background-color: pink; */
}
.check-button {
  top: 10px;
  height: 18px;
  width: 18px;
}

.center {
  height: 40px;
  line-height: 40px;
}

.right {
  position: absolute;
  right: 0;
  text-align: center;
  /* padding-right: 30px; */
  width: 130px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: rgb(255, 89, 0);
}
</style>