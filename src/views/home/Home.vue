<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div class="center" slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control-top"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl_1"
      v-show="isTabControlFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper @swiperImgLoded="swiperImgLoded"> </home-swiper>
      <recommend-view
        :recommends="recommends"
        @RecomViewImgLoad="RecomViewImgLoad"
      ></recommend-view>
      <feature-view @TeatureViewImgLoaded="TeatureViewImgLoaded"></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl_2"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <!-- <h1>首页</h1> -->
  </div>
</template>

<script>
import RecommendView from "views/home/childComps/RecommendView.vue";
import FeatureView from "views/home/childComps/FeatureView.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/common/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop.vue";

// 网络请求
import { getHomeGoods } from "network/home.js";

// 优化相关
// 防抖
import { debounce } from "common/utils.js";

export default {
  name: "Home",
  components: {
    RecommendView,
    FeatureView,
    HomeSwiper,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  data() {
    return {
      // [{}, {},{}, {}] 模拟以获取数据
      recommends: [
        {
          link: "http://m.meilishuo.com/?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          title: "十点抢券",
          img: "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
        },
        {
          link: "http://m.meilishuo.com/?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          title: "好物特卖",
          img: "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
        },
        {
          link: "http://m.meilishuo.com/?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          title: "内购福利",
          img: "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
        },
        {
          link: "http://m.meilishuo.com/?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          title: "初秋上新",
          img: "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
        },
      ],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      isTabControlFixed: false,
      saveY: 0,
    };
  },

  created() {
    // 1.请求/home/data数据
    this._getHomeGoods("pop");
    this._getHomeGoods("new");
    this._getHomeGoods("sell");
  },

  mounted() {
    //1.组件创建完成后就立刻开始监听GoodsListItem中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50);

    this.$bus.$on("itemImgLoad", () => {
      // this.$refs.scroll.refresh(); //这样调用refresh有点频繁，因为每加载完成一张图片就refresh调用refresh一次，性能会降低，所以要防抖
      // console.log("-----");
      refresh(); //防抖封装
    });

    // 2.获取tabControll的offsetTop
    // 所有组件都有以一个属性$el，用于获取组件中的元素
    // console.log(this.$refs.tabControl.$el.offsetTop);
  },

  methods: {
    // 事件监听相关
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

      this.$refs.tabControl_1.currentIndex = index;
      this.$refs.tabControl_2.currentIndex = index;
    },

    // 点击回到顶部
    backClick() {
      // console.log("backClick");
      // console.log(this.$refs.scroll.message);
      // console.log(this.$refs.scroll.scroll.scrollTo);
      this.$refs.scroll.scrollTo(0, 0, 300); //在scroll.vue封装成方法
    },

    //返回顶部按钮显示与隐藏 //tabControl是否吸顶效果（固定定位）
    contentScroll(position) {
      // console.log(position);
      // 返回顶部按钮显示与隐藏
      this.isShowBackTop = -position.y > 800;

      //tabControl是否增加固定定位(position:fixed)
      this.isTabControlFixed = -position.y > this.tabControlOffsetTop;
      // console.log(this.isTabControlFixed);
    },

    // 上拉加载更多商品********很巧妙
    loadMore() {
      // console.log("上拉加载更多");
      this._getHomeGoods(this.currentType);
    },

    //tabControl根据swiper&RecomView&eatureView图片加载完成后,获取offsetTop值，增加固定定位样式
    swiperImgLoded() {
      // console.log("swiperImgLoded");
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabControlOffsetTop = this.$refs.tabControl_2.$el.offsetTop;
      // console.log(this.tabControlOffsetTop);
    },
    RecomViewImgLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl_2.$el.offsetTop;
      // console.log(this.tabControlOffsetTop); //最快加载完成
    },
    TeatureViewImgLoaded() {
      this.tabControlOffsetTop = this.$refs.tabControl_2.$el.offsetTop;
      // console.log(this.tabControlOffsetTop);
    },

    // 请求数据相关方法
    _getHomeGoods(type) {
      // 获取页码
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list); //扩展运算符的运用
          this.goods[type].page += 1;

          // 完成上拉加载更多，然后.finishPullUp()，才可进行第二次上拉加载更多
          // this.$refs.scroll.scroll.finishPullUp(); //在scroll.vue封装成方法
          this.$refs.scroll.finishPullUp();
        })
        .catch((err) => {
          // console.log(err);
        });
    },
  },

  //<keep-alive>  <router-view></router-view>   </keep-alive>,可以以使路由页面不会因为切换销毁
  destroyed() {
    // console.log("home distroy");
  },
  //使用<keep-alive> 当切换到当前路由（页面时）会调用当前页面activated()
  activated() {
    // console.log("home activated");
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  //使用<keep-alive> 当离开当前路由（页面时）会调用当前页面activated()
  deactivated() {
    // console.log("home deactivated");
    this.saveY = this.$refs.scroll.scroll.y;
    // console.log(this.saveY);
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  /* margin-top: 44px; */
}
#home .home-nav-bar {
  /* 使用浏览器原生滚动时 */
  /* position: fixed; */
  /* top: 0;
  width: 100%;
  height: 44px; */

  background-color: var(--color-tint);
}

#home .content {
  position: absolute;
  top: 44px;
  height: calc(100% - 109px);
  overflow: scroll;
}

.tab-control-top {
  position: relative;
  z-index: 9;
}
</style>