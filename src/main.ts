import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'

import initSvgIcon from '@/icons/index.ts'
import 'virtual:svg-icons-register'
import './styles/index.scss'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(createPinia())
  .use(initSvgIcon)
  .mount('#app')
