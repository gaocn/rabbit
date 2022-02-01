import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 一级路由布局容器
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout'),
    children: [
      // 给一级布局容器添加默认组件
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/category/:id',
        name: 'category',
        component: () => import('@/views/category'),
        props: true
      },
      {
        path: '/category/sub/:id',
        name: 'subcategory',
        component: () => import('@/views/category/sub'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
