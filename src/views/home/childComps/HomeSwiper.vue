<template>
  <div id="gp-swiper">
    <div class="swiper">
      <swiper-item
        ><img src="~assets/img/home/banner/01.jpg" alt="" @load="imgLoad"
      /></swiper-item>
      <swiper-item
        ><img src="~assets/img/home/banner/01.jpg" alt="" @load="imgLoad"
      /></swiper-item>
      <swiper-item
        ><img src="~assets/img/home/banner/01.jpg" alt="" @load="imgLoad"
      /></swiper-item>
      <swiper-item
        ><img src="~assets/img/home/banner/01.jpg" alt="" @load="imgLoad"
      /></swiper-item>
    </div>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";

export default {
  name: "HomeSwiper",
  components: { Swiper, SwiperItem },
  data() {
    return {
      isImgLoaded: false,
    };
  },

  methods: {
    // swipper图片加载完成，固定tabControll
    imgLoad() {
      // console.log("imgLoaded");
      if (!this.isImgLoaded) {
        this.$emit("swiperImgLoded");
        this.isImgLoaded = true;
      }
    },
  },
};
</script>


<style scoped>
/* #gp-swiper {
  overflow: hidden;
} */
/* 清除scrollbar */
/* ::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
} */
#gp-swiper .swiper {
  overflow: hidden;
  height: 205px;
}
#gp-swiper swiper-item {
  height: 205px;
  width: 100%;
}
.swiper-item img {
  height: 205px;
  width: 100%;
}
</style>


