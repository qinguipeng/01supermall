<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in topImages" :key="item">
        <img :src="item" alt="" />
      </div>
      <!-- 
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>



<script>
import Swiper from "swiper";

export default {
  name: "NewDetailSwiper",
  components: {},
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  watch: {
    topImages: {
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            // direction: "vertical", // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
              delay: 3000,
              stopOnLastSlide: true,
              disableOnInteraction: false,
            },
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>


<style scoped>
.swiper-container {
  width: 100vw;
  height: 300px;
}
/* .swiper-pagination {
  position: relative;
  top: 30px;
} */
.swiper-slide {
  overflow: hidden;
  width: 100vw;
  /* height: 300px; */
}

.swiper-slide img {
  overflow: hidden;
  width: 100vw;
  /* height: 300px; */
}
</style>