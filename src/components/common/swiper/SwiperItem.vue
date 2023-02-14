<template>
  <div class="swiper-item">
    <a href="#"><slot></slot></a>
  </div>
</template>


<script>
export default {
  name: "SwiperItem",
  methods: {},
};
</script>


<style scoped>
.swiper-item {
  height: 100%;
  width: 100%;
  background-color: red;
  /* border: 2px solid yellowgreen; */
}
</style>