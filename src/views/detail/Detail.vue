<template>
  <div class="detail">
    <h1>详情页</h1>
    <h1>{{ iid }}</h1>
  </div>
</template>


<script>
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
};
</script>


<style scoped>
</style>
