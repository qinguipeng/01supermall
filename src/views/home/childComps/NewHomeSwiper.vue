<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in this.bannerList"
        :key="item.id"
        ref="swiper-slide"
      >
        <a href="http://m.meilishuo.com">
          <img :src="item.imgUrl" alt="" />
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>


<script>
// 1. 导入Swiper
// 2. 将swiper放置模板标签中
// 3. 在main.js引入swiper样式（因为有多次运用到swiper,只在程序入口文件main.js引入即可）
import Swiper from "swiper";

// 导入vuex的mapState辅助函数
import { mapState } from "vuex";

export default {
  name: "newHomeSwiper",
  computed: {
    ...mapState({
      bannerList: (state) => {
        return state.bannerList;
      },
    }),
  },

  //$store派发action,在actions中请求数据
  created() {
    this.$store.dispatch("getBnnerList");
    // setTimeout(() => {
    //   console.log(this.bannerList);

    //   var mySwiper = new Swiper(".swiper", {
    //     loop: true, // 循环模式选项
    //     autoplay: true, //自动轮播
    //     // 如果需要分页器
    //     pagination: {
    //       el: ".swiper-pagination",
    //     },

    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });
    // }, 1000);
  },

  // 当数据更新完成，并保存到
  watch: {
    bannerList: {
      //  handler回调一执行表示仓库的数据已经更新
      handler(newValue, oldValue) {
        // console.log(this.bannerList);

        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            loop: true, // 循环模式选项
            // autoplay: true, //自动轮播 等同于以下设置
            autoplay: {
              delay: 3000,
              stopOnLastSlide: true,
              disableOnInteraction: false,
            },

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
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
  height: 205px;
  /* background-color: yellow; */
}
.swiper-slide img {
  height: 100%;
  width: 100vw;
}
.swiper-pagination {
  position: relative;
  bottom: 20px;
}
</style>



