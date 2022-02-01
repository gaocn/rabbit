<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>

    <li v-for="(item, index) in categories" :key="index" @mouseenter="show(item.id)" @mouseleave="hide(item.id)">
          <router-link :to="`/category/${item.id}`"> {{ item.name }} </router-link>
          <div class="layer" :class="{open: item.open}">
            <ul>
              <li v-for="(subItem, subIndex) in item.children" :key="index + ':' + subIndex">
                <router-link :to="`/category/sub/${subItem.id}`">
                  <img :src="subItem.picture" alt="">
                  <p>{{subItem.name}}</p>
                </router-link>
              </li>
            </ul>
          </div>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    const categories = computed(() => {
      return store.state.category.list
    })

    const show = id => {
      store.commit('category/show', id)
    }

    const hide = id => {
      store.commit('category/hide', id)
    }

    return { categories, show, hide }
  }
}
</script>
<style scoped lang='less'>
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
}
.layer {
  &.open {
    height: 132px;
    opacity: 1;
  }
  width: 1240px;
  height: 0;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all .2s .1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
