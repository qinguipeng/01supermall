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
  flex: 1;
  width: 600px;
}
.swiper-item img {
  width: 100%;
}
</style>