<template>
  <swiper class="detail-swiper">
    <swiper-item class="swiper-item" v-for="item in topImages" :key="item">
      <img :src="item" alt=""
    /></swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>


<style scoped>
.detail-swiper {
  height: 300px;
  overflow-x: scroll;
}
.swiper-item {
  width: 300px;
  height: 300px;
  float: left;
}
.swiper-item img {
  height: 300px;
  width: 100%;
}
</style>