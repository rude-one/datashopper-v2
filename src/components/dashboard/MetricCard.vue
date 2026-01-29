<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [Number, String],
    required: true
  },
  formatted: {
    type: Boolean,
    default: true
  }
})

function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num)
}
</script>

<template>
  <div class="flex flex-col">
    <span class="text-sm text-gray-500 font-medium">{{ label }}</span>
    <span class="text-2xl font-bold text-gray-900 mt-1">
      {{ formatted && typeof value === 'number' ? formatNumber(value) : value }}
    </span>
  </div>
</template>
