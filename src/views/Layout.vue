<template>
<div class="layout-container">
  <!-- 顶部导航栏 -->
  <top-nav></top-nav>

  <!-- 头部组件 -->
  <header></header>

  <!-- 内容容器 -->
  <div class="main-container">
    <!-- 二级路由 -->
    <router-view />
  </div>
  <!-- 底部组件 -->
  <footer></footer>
</div>
</template>
<script>
import TopNav from '@/components/TopNav.vue'
export default {
  name: 'HomeLayout',
  components: { TopNav }
}
</script>
<style lang="less" scoped>

</style>
