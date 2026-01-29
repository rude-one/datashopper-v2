<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const props = defineProps({
  labels: {
    type: Array,
    required: true
  },
  datasets: {
    type: Array,
    required: true
  }
})

const chartData = computed(() => ({
  labels: props.labels,
  datasets: props.datasets.map(dataset => ({
    ...dataset,
    tension: 0.4,
    pointRadius: 4,
    pointHoverRadius: 6,
    pointBackgroundColor: dataset.borderColor,
    pointBorderColor: '#fff',
    pointBorderWidth: 2
  }))
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
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
      boxPadding: 6,
      usePointStyle: true,
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || ''
          if (label) {
            label += ': '
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US').format(context.parsed.y)
          }
          return label
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#9ca3af',
        font: {
          size: 11
        }
      }
    },
    y: {
      grid: {
        color: '#f3f4f6'
      },
      ticks: {
        color: '#9ca3af',
        font: {
          size: 11
        },
        callback: function(value) {
          return new Intl.NumberFormat('en-US', { notation: 'compact' }).format(value)
        }
      }
    }
  }
}
</script>

<template>
  <div class="h-full w-full">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
