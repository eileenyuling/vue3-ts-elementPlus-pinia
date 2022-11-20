import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '../views/dashboard/index.vue'
          ),
        meta: {
          title: 'Dashboard' // 需要配置声明文件否则无提示
        }
      }
    ]
  },
  {
    path: '/home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    component: () => import('../views/about.vue')
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})
