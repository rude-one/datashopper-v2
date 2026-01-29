<script setup>
import TheSidebar from './TheSidebar.vue'
import TheHeader from './TheHeader.vue'
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()
</script>

<template>
  <div class="min-h-screen">
    <TheSidebar />
    <div
      class="transition-all duration-300"
      :class="uiStore.sidebarCollapsed ? 'ml-[72px]' : 'ml-[220px]'"
    >
      <TheHeader />
      <main class="p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
