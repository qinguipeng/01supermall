<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="seclectAllClick"
      ></check-button>
      <span class="text">全选</span>
    </div>

    <div class="center">合计：{{ totalPrice }}</div>

    <div class="right" @click="ToSettleClick">
      去结算：({{ checkedLength }})
    </div>
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

    //判断是否全选,默认是false不全选，条件是当cartList里的item的checked属性
    // 1.$store.state.cartList.length===>购物车里面商品的数量
    // $store.state.cartList.filter((item) => item.checked).length ===>选中的商品的数量
    // 二者比较相等则显示全选样式，不相等则不显示全选样式，前提是购物车里面有商品
    isSelectAll() {
      return (
        this.$store.state.cartList.length ===
          this.$store.state.cartList.filter((item) => item.checked).length &&
        this.$store.state.cartList.length > 0
      );
    },
  },

  methods: {
    seclectAllClick() {
      // console.log("seclectAllClick");
      if (this.$store.state.cartList.length !== 0) {
        if (
          this.$store.state.cartList.length ==
          this.$store.state.cartList.filter((item) => item.checked).length
        ) {
          // 点击实现清除全选： 循环使得 item.checked=false
          // console.log("清除全选");
          this.$store.state.cartList.forEach((item) => {
            item.checked = false;
          });
        } else {
          // 点击实现宣布勾选：循环使得 item.checked=true
          // console.log("全选勾选");
          this.$store.state.cartList.forEach((item) => {
            item.checked = true;
          });
        }
      } else {
        alert("购物车为空");
      }
    },

    ToSettleClick() {
      if (!this.$store.state.cartList.find((item) => item.checked)) {
        console.log(this.$toast);
        this.$toast.show("请选择要结算的商品", 2000);
      }
    },
  },
};
</script>


<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 80px;
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
.text {
  padding-left: 5px;
}
.check-button {
  top: 10px;
  height: 18px;
  width: 18px;
}

.center {
  height: 40px;
  line-height: 40px;
  color: rgb(255, 0, 0);
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
  background-color: rgb(255, 0, 0);
}
</style>