<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>



<script>
//  引入bscroll 及插件
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      // message: "点击回到顶部",
    };
  },

  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // ...... 配置项
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    //2. 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }

    // 3. 监听sroll滚到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("滚动到底部了");
        this.$emit("pullingUp");
      });
    }
  },

  methods: {
    // 封装scroll的scrollTo方法
    scrollTo(x, y, time = 300) {
      // 解决因为生命周期函数mounted(){未创建new BScroll实例成功}而Home.vue页面在created(){使用scroll的方法scroll.refresh()等bug;
      this.scroll &&
        this.scroll.scrollTo &&
        this.scroll.scrollTo(x, y, (time = 300));
    },
    // 封装scroll的finishPullUp方法
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },

    // 封装scroll的refresh方法
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
      // console.log("-----");
    },
  },
};
</script>


<style scoped>
</style>