<template>
  <div class="tab-bar-item" @click="itmClick">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-icon-active">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle" class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "blue",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    // this.$router.replace实现点击切换路由routes
    itmClick() {
      this.$router.replace(this.path);
    },
  },

  computed: {
    // 当前活跃路由this.$route.path与当前路由的path(this.path有字符串相同时，利用indexOf(),方法查找索引值是否为-1来return一个布尔值)
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },

    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item .item-icon img,
.item-icon-active img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
