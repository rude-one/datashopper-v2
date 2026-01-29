<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  data: {
    type: Array,
    required: true
    // [{ label: 'Brand', value: 28, color: '#8b5cf6' }]
  }
})

const chartData = computed(() => ({
  labels: props.data.map(d => d.label),
  datasets: [{
    data: props.data.map(d => d.value),
    backgroundColor: props.data.map(d => d.color),
    borderWidth: 0,
    hoverOffset: 4
  }]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      titleColor: '#1f2937',
      bodyColor: '#4b5563',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      padding: 12,
      callbacks: {
        label: function(context) {
          return `${context.label}: ${context.parsed}%`
        }
      }
    }
  }
}
</script>

<template>
  <div class="flex items-center gap-6">
    <!-- Chart -->
    <div class="w-40 h-40 flex-shrink-0">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>

    <!-- Legend -->
    <div class="flex-1 space-y-3">
      <div
        v-for="item in data"
        :key="item.label"
        class="flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <span
            class="w-2.5 h-2.5 rounded-full"
            :style="{ backgroundColor: item.color }"
          ></span>
          <span class="text-sm text-gray-600">{{ item.label }}</span>
        </div>
        <span class="text-sm font-semibold text-gray-900">{{ item.value }}%</span>
      </div>
    </div>
  </div>
</template>
