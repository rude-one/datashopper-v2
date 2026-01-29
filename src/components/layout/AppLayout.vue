<script setup>
import TheSidebar from './TheSidebar.vue'
import TheHeader from './TheHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <TheSidebar />
    <div class="ml-[240px]">
      <TheHeader />
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
