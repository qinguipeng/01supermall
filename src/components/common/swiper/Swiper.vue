<template>
  <div id="gp-swiper">
    <div class="swiper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  components: {},
  data() {
    return {};
  },
};
</script>


<style scoped>
#gp-swiper {
  width: 100%;
  /* height: 100%; */
  border: 2px solid #333;
  overflow-x: scroll;
}
.swiper {
  /* height: 100%; */
  width: 1000%;
  background-color: pink;
}
</style>


