<template>
  <div class="feature-view">
    <a href="https://act.mogujie.com/zzlx67">
      <img
        src="~assets/img/home/FeatureView/featureView.jpg"
        alt=""
        @load="imgLoaded"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  methods: {
    imgLoaded() {
      this.$emit("TeatureViewImgLoaded");
    },
  },
};
</script>


<style scoped>
.feature-view {
  width: 100%;
  border-bottom: 10px solid #eee;
}
.feature-view img {
  width: 100%;
}
</style>