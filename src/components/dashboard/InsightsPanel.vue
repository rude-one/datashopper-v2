<script setup>
import { LightBulbIcon } from '@heroicons/vue/24/outline'

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 p-6 h-full">
    <div class="flex items-center gap-2 mb-4">
      <LightBulbIcon class="w-5 h-5 text-primary-500" />
      <span class="text-primary-600 font-medium">Insights</span>
    </div>
    <h3 class="text-lg font-semibold text-gray-900 mb-3 leading-snug">
      {{ title }}
    </h3>
    <p class="text-sm text-gray-600 leading-relaxed">
      {{ content }}
    </p>
  </div>
</template>
