<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 65px;
  background-color: #f6f6f6;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1);
  z-index: 8;
}
</style>