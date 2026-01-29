import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const sidebarCollapsed = ref(false)
  const darkMode = ref(false)
  const notifications = ref([])

  function toggleSidebar() {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
  }

  function addNotification(notification) {
    notifications.value.push({
      id: Date.now(),
      ...notification
    })
  }

  function removeNotification(id) {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  return {
    sidebarCollapsed,
    darkMode,
    notifications,
    toggleSidebar,
    toggleDarkMode,
    addNotification,
    removeNotification
  }
})
