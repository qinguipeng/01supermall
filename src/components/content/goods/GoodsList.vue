<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goods-item="item">
    </goods-list-item>
  </div>
</template>


<script>
import GoodsListItem from "components/content/goods/GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>


<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
}

.goods-list .goods-item {
  width: 48%;
}
</style>