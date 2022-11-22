import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'

import initSvgIcon from '@/icons/index.ts'
import 'virtual:svg-icons-register'
import './styles/index.scss'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(pinia)
  .use(initSvgIcon)
  .mount('#app')
