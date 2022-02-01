<template>
<div class="layout-container">
  <!-- 顶部导航栏 -->
  <top-nav></top-nav>

  <!-- 头部组件 -->
  <app-header></app-header>

  <!-- 头部吸顶组件 -->
  <app-header-sticky/>

  <!-- 内容容器 -->
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view />
  </main>
  <!-- 底部组件 -->
  <app-footer></app-footer>
</div>
</template>
<script>
import TopNav from '@/components/TopNav.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppHeaderSticky from '@/components/AppHeaderSticky.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useStore } from 'vuex'
export default {
  name: 'HomeLayout',
  components: { TopNav, AppHeader, AppHeaderSticky, AppFooter },
  setup () {
    const store = useStore()
    store.dispatch('category/getHeadCategory')
  }
}
</script>
<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
