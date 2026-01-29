<script setup>
defineProps({
  items: {
    type: Array,
    required: true
    // [{ label: 'Users', color: '#3b82f6' }]
  }
})
</script>

<template>
  <div class="flex items-center justify-center gap-6 mt-4">
    <div
      v-for="item in items"
      :key="item.label"
      class="flex items-center gap-2"
    >
      <span
        class="w-3 h-3 rounded-full"
        :style="{ backgroundColor: item.color }"
      ></span>
      <span class="text-sm text-gray-600">{{ item.label }}</span>
    </div>
  </div>
</template>
