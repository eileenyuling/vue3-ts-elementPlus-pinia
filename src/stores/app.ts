import { defineStore } from 'pinia'
import { storageLocal } from '@/utils/storage'

export const useAppStore = defineStore('app', () => {
  // 状态
  const state = reactive({
    siderbar: {
      // sidebar 展开状态
      opened: storageLocal.getItem<{ sidebarStatus: boolean }>(
        'responsive-layout'
      )?.sidebarStatus
    }
  })
  const sidebar = computed(() => state.siderbar)

  // actions
  const toggleSidebar = () => {
    state.siderbar.opened = !state.siderbar.opened
    localStorage.setItem(
      'responsive-layout',
      JSON.stringify({
        sidebarStatus: state.siderbar.opened
      })
    )
  }
  return { sidebar, toggleSidebar }
})
