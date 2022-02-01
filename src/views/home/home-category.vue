<template>
  <div class='home-category' @mouseleave="categoryId = null">
    <ul class="menu">
      <li v-for="(item, index) in menuList" :key="index" @mouseenter="categoryId = item.id" :class="{active: categoryId === item.id}">
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <template v-if="item.children && item.children.length">
          <RouterLink :to="`/category/sub/${subItem.id}`" v-for="(subItem, subIndex) in item.children" :key="subIndex" >{{subItem.name}}</RouterLink>
        </template>
        <template v-else>
          <XtxSkeleton width="60px" height="18px" style="margin-right:5px" bg="rgba(255,255,255,0.2)"/>
          <XtxSkeleton width="50px" height="18px" bg="rgba(255,0,0,0.2)"/>
        </template>
      </li>
    </ul>
    <div class="layer">
      <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <ul v-if="recommendGoods && recommendGoods.goods && recommendGoods.goods.length">
        <li v-for="item in recommendGoods.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <div class="info">
              <p class="name ellipsis-2">{{item.name}}</p>
              <p class="desc ellipsis">{{item.desc}}</p>
              <p class="price"><i>¥</i>{{item.price}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul v-if="recommendGoods && recommendGoods.brands && recommendGoods.brands.length">
        <li class="brand" v-for="item in recommendGoods.brands" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <div class="info">
              <p class="place"><i class="iconfont icon-dingwei"></i>{{item.place}}</p>
              <p class="name ellipsis">{{item.name}}</p>
              <p class="desc ellipsis-2">{{item.desc}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { findBrand } from '@/api/home'
import XtxSkeleton from '../../components/library/xtx-skeleton.vue'
export default {
  name: 'HomeCategory',
  setup () {
    const brand = {
      id: 'brand',
      name: '品牌',
      children: [{ id: 'brand-child', name: '品牌推荐' }],
      brands: []
    }
    findBrand(9).then(data => {
      brand.brands = data.result
    })
    const store = useStore()
    const menuList = computed(() => {
      const filteredList = store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      filteredList.push(brand)
      return filteredList
    })
    const categoryId = ref(null)
    const recommendGoods = computed(() => {
      return menuList.value.filter(item => item.id === categoryId.value)[0]
    })
    return { menuList, categoryId, recommendGoods }
  },
  components: { XtxSkeleton }
}
</script>
<style scoped lang='less'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0,0,0,0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover, &.active{
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }

  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255,255,255,0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
              width: 95px;
              height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
