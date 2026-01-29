<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
    // [{ label: '/page-url', value: 6070 }]
  },
  labelKey: {
    type: String,
    default: 'label'
  },
  valueKey: {
    type: String,
    default: 'value'
  }
})

function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num)
}
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 overflow-hidden h-full">
    <div class="px-4 py-3 border-b border-gray-100">
      <h3 class="text-sm font-semibold text-primary-600 text-center">{{ title }}</h3>
    </div>
    <div class="divide-y divide-gray-50">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
      >
        <span class="text-sm text-gray-600 truncate flex-1 mr-4">
          {{ item[labelKey] }}
        </span>
        <span class="text-sm font-medium text-gray-900">
          {{ formatNumber(item[valueKey]) }}
        </span>
      </div>
    </div>
  </div>
</template>
