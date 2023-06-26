<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
    </div>
    <div class="item-text">
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item .item-icon {
  /* background-color: red; */
  width: 24px;
  height: 24px;
  /* margin-top: 3px; */
  /* vertical-align: middle; */
  margin-bottom: 2px;
  margin: 3px auto;
}
.tab-bar-item .item-icon img {
  width: 24px;
  height: 24px;
}
</style>
