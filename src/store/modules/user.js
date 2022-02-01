export default {
  namespace: true,
  // 用户信息
  state () {
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    // payload为用户对象信息
    setUsername (state, payload) {
      state.profile = payload
    }
  },
  actions: {},
  getters: {}
}
