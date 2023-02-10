<template>
  <div id="gp-swiper">
    <div class="swiper">
      <swiper-item
        ><img src="~assets/img/home/banner/01.jpg" alt="" @load="imgLoad"
      /></swiper-item>
      <swiper-item
        ><img src="~assets/img/home/banner/02.jpg" alt="" @load="imgLoad"
      /></swiper-item>
      <swiper-item
        ><img src="~assets/img/home/banner/03.jpg" alt="" @load="imgLoad"
      /></swiper-item>
      <swiper-item
        ><img src="~assets/img/home/banner/04.jpg" alt="" @load="imgLoad"
      /></swiper-item>
    </div>
  </div>
</template>

<script>
import SwiperItem from "./SwiperItem.vue";

export default {
  name: "Swiper",
  components: { SwiperItem },
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
#gp-swiper {
  position: relative;
  /* margin-top: 44px; */
  height: 205px;
  width: 100%;
}
/* 清除scrollbar */
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.swiper {
  position: absolute;
  display: flex;

  height: 100%;
  width: 400%;
}
</style>


