import axios from 'axios'
import store from '@/store'
import router from '@/router'

const instance = axios.create({
  baseUrl: '/api',
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // token统一注入
  const { profile } = store.state.user
  if (profile.token) {
    config.headers['X-Auth-Token'] = profile.token
  }
  return config
}, err => { return Promise.reject(err) })

instance.interceptors.response.use(resp => {
  return resp.data
}, err => {
  // token有效性的被动处理
  if (err.response && err.response.status === 401) {
    // 用户信息无效，需要重新登录
    store.commit('user/setUser', {})
    // 跳转到登陆页并且将当前访问URL作为路由重定向参数
    const currentPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + currentPath)
  }

  return Promise.reject(err)
})

export default (url, method, data) => {
  return instance({
    url: '/api' + url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  })
}
