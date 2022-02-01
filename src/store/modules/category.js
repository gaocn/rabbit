import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  // 商品分类信息
  state: () => {
    return {
      // 设置默认值
      list: topCategory.map(i => ({ name: i, open: false, children: [] }))
    }
  },
  mutations: {
    setHeadCategory (state, headCategory) {
      state.list = headCategory
    },
    show (state, id) {
      state.list.forEach(item => {
        if (item.id === id) {
          item.open = true
        }
      })
    },
    hide (state, id) {
      state.list.forEach(item => {
        if (item.id === id) {
          item.open = false
        }
      })
    }
  },
  actions: {
    async getHeadCategory ({ commit }) {
      try {
        const { result } = await findAllCategory()
        result.forEach(item => { item.open = false })
        commit('setHeadCategory', result)
      } catch (err) {
        console.log('err: ', err)
      }
    }
  },
  getters: {}
}
