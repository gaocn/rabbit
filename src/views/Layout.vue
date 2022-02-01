<template>
<div class="layout-container">
  <!-- 顶部导航栏 -->
  <nav></nav>

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
export default {
  name: 'HomeLayout'
}
</script>
<style lang="less" scoped>

</style>
