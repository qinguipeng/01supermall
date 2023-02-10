<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link"><img :src="item.img" alt="" @load="imgLoad" /></a>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "RecommendView",

  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    imgLoad() {
      // console.log("RecomViewImgLoad");
      this.$emit("RecomViewImgLoad");
    },
  },
};
</script>


<style scoped>
.recommend {
  display: flex;
  /* height: 160px; */
  width: 100%;
  padding: 15px 0 0px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  width: 25%;
  height: 100%;
  text-align: center;
  margin: 15px 5px;
  font-size: 14px;
}
.recommend-item img {
  width: 100%;
  height: width;
}
</style>