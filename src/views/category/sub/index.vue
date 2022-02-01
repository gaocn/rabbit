<template>
<div>
  二级分类{{ id }}
</div>
</template>

<script>
export default {
  name: 'SubCategory',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
</style>
