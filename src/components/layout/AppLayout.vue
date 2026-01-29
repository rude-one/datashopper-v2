<script setup>
import TheSidebar from './TheSidebar.vue'
import TheHeader from './TheHeader.vue'
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <TheSidebar />
    <div
      class="transition-all duration-300"
      :class="uiStore.sidebarCollapsed ? 'ml-16' : 'ml-56'"
    >
      <TheHeader />
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
