<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div class="back" slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div class="titles" slot="center">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: { NavBar },

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },

    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>


<style scoped>
.titles {
  color: #666;
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 14px;
}

.active {
  color: var(--color-tint);
}

.back {
  vertical-align: middle;
}
.back img {
  padding-top: 10px;
}
</style>