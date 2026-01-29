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
  }
})

const chartData = computed(() => ({
  labels: props.data.map(d => d.label),
  datasets: [{
    data: props.data.map(d => d.value),
    backgroundColor: props.data.map(d => d.color),
    borderWidth: 0,
    hoverOffset: 8,
    spacing: 2
  }]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '72%',
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#1a1f2e',
      titleColor: '#fff',
      bodyColor: '#9ca3af',
      padding: 12,
      cornerRadius: 8,
      displayColors: false,
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
  <div class="flex items-center gap-8">
    <!-- Chart -->
    <div class="w-[160px] h-[160px] flex-shrink-0">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>

    <!-- Legend -->
    <div class="flex-1 space-y-4">
      <div
        v-for="item in data"
        :key="item.label"
        class="flex items-center justify-between"
      >
        <div class="flex items-center gap-2.5">
          <span
            class="w-3 h-3 rounded-full"
            :style="{ backgroundColor: item.color }"
          ></span>
          <span class="text-sm text-gray-600">{{ item.label }}</span>
        </div>
        <span class="text-sm font-semibold text-gray-900">{{ item.value }}%</span>
      </div>
    </div>
  </div>
</template>
