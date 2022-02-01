<template>
  <div class="container">
    <home-category />
  </div>
</template>

<script>
import HomeCategory from './home-category.vue'
export default {
  name: 'Home',
  components: { HomeCategory }

}
</script>

<style lang="less" scoped>
.home-container {
  .hoverShadow();
  color: @warnColor;
}
</style>
