<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
    ></detail-nav-bar>
    <scroll class="wrapper" ref="scroll">
      <!-- <ul>
        <li v-for="item in $store.state.cartList">{{ item }}</li>
      </ul> -->

      <new-detail-swiper :top-images="topImages"></new-detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="param"
        :param-info="paramInfo"
      ></detail-param-info>
      <detail-comment-info
        ref="commend"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar
      @addCart="addToCart"
      class="detail-bottom-bar"
      @toBuy="toCartBuy"
    ></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <!-- <toast :message="message" :is-show="isShow" /> -->
  </div>
</template>


<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import NewDetailSwiper from "views/detail/childComps/NewDetailSwiper.vue";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo.vue";
import DetailShopInfo from "views/detail/childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "views/detail/childComps/DetailParamInfo.vue";
import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo.vue";
import DetailBottomBar from "views/detail/childComps/DetailBottomBar.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
// import Toast from "components/common/toast/Toast.vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    NewDetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    BackTop,

    Scroll,
    GoodsList,
    // Toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      isShowBackTop: true,
      // message: "",
      // isShow: false,
    };
  },
  created() {
    // 1. ???????????????iid
    this.iid = this.$route.params.iid;

    // 2. ??????iid?????????????????????
    getDetail(this.iid)
      .then((res) => {
        // console.log(res);
        const data = res.result;
        // 1. ?????????????????????
        this.topImages = data.itemInfo.topImages;

        // 2. ????????????????????????????????????
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 3.??????????????????
        this.shop = new Shop(data.shopInfo);

        // 4.???????????????????????????
        this.detailInfo = data.detailInfo;

        // 5. ??????????????????
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 6. ?????????????????????

        // 7. ?????????????????????rate
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }

        this.$nextTick(() => {
          this.themeTopYs = [];

          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.param.$el.offsetTop);
          this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
          // console.log(this.themeTopYs);
        });

        // naveBar????????????
      })

      .catch((err) => {});

    // 3. ??????????????????
    getRecommend()
      .then((result) => {
        this.recommends = result.data.list;
        // console.log(this.recommends);
      })
      .catch((err) => {
        throw err;
      });
  },
  mounted() {},
  updated() {},
  methods: {
    imageLoad() {
      // console.log("imageLoadd");
      this.$refs.scroll.refresh();
      // console.log(this.$refs.scroll.refresh);
    },

    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs, 100);
    },

    // ??????????????????
    backClick() {
      // console.log(this.$refs.scroll.message);
      // console.log(this.$refs.scroll.scroll.scrollTo);
      this.$refs.scroll.scrollTo(0, 0, 300); //???scroll.vue???????????????
    },

    //????????????????????????????????? //tabControl????????????????????????????????????
    contentScroll(position) {
      // console.log(position);
      // ?????????????????????????????????
      this.isShowBackTop = -position.y > 800;

      //tabControl????????????????????????(position:fixed)
      this.isTabControlFixed = -position.y > this.tabControlOffsetTop;
      console.log(this.isTabControlFixed);
    },

    // ?????????????????????
    addToCart() {
      // 1.????????????????????????????????????
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // console.log(product);

      // 2.???????????????????????????;
      // this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product).then((res) => {
        // console.log(res);
        // this.message = res;
        // this.isShow = true;
        // setTimeout(() => {
        //   this.isShow = false;
        // }, 2000);

        // ?????????????????????????????????
        // console.log(this.$toast);
        this.$toast.show(res, 2000);
      });
    },
    // ?????????????????????????????????????????????
    toCartBuy() {
      // 1.????????????????????????????????????
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // console.log(product);

      // 2.???????????????????????????;
      this.$store.dispatch("addCart", product).then((res) => {
        // ?????????????????????????????????
        // console.log(this.$toast);
        this.$toast.show(res, 2000);
      });
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.detail-nav-bar {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.wrapper {
  margin-top: 44px;
  /* height: calc(100%-109px); */
  height: 800px;
}
</style>
