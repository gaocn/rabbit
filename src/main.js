import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式
import 'normalize.css'
// 引入公用样式
import '@/assets/styles/common.less'

// 引入自定义插件
import UI from '@/components/library'

createApp(App).use(store).use(router).use(UI).mount('#app')
