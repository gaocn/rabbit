<template>
<div class="home-entry">
  <div class="container">
    <!-- 左侧分类 -->
    <home-category />

    <!-- 轮播图 -->
    <home-banner />
  </div>
</div>
</template>

<script>
import HomeCategory from './home-category.vue'
import HomeBanner from './home-banner.vue'
export default {
  name: 'Home',
  components: { HomeCategory, HomeBanner }

}
</script>

<style lang="less" scoped>
.home-container {
  // .hoverShadow();
  // color: @warnColor;
}
</style>
