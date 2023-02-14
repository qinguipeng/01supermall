<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>


<script>
export default {
  name: "CartBottomBar",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style  scoped>
.check-button {
  background-color: #eee;
  border: 1px solid #aaa;
  border-radius: 5px;
}
.check {
  background-color: red;
}
</style>