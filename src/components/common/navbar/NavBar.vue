<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>


<style scoped>
.nav-bar {
  display: flex;
  width: 100%;
}
.nav-bar .left,
.right {
  width: 60px;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.nav-bar .right {
  margin-right: 0;
}

.center {
  text-align: center;
  flex: 1;
  height: 44px;
  line-height: 44px;
  color: aliceblue;
}
</style>