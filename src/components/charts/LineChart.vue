<script setup>
import { computed, ref, onMounted } from 'vue'
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

const chartRef = ref(null)

const chartData = computed(() => ({
  labels: props.labels,
  datasets: props.datasets.map((dataset, index) => {
    // Create gradient for first dataset (main line)
    const gradientFill = index === 0

    return {
      ...dataset,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointBackgroundColor: dataset.borderColor,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      borderWidth: 2.5,
      fill: gradientFill ? 'origin' : false,
      backgroundColor: gradientFill
        ? (context) => {
            const chart = context.chart
            const { ctx, chartArea } = chart
            if (!chartArea) return null
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
            gradient.addColorStop(0, 'rgba(139, 92, 246, 0)')
            gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)')
            gradient.addColorStop(1, 'rgba(139, 92, 246, 0.15)')
            return gradient
          }
        : 'transparent'
    }
  })
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
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      titleColor: '#1f2937',
      bodyColor: '#4b5563',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      padding: 14,
      boxPadding: 6,
      usePointStyle: true,
      cornerRadius: 10,
      titleFont: {
        size: 13,
        weight: '600'
      },
      bodyFont: {
        size: 12
      },
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
      border: {
        display: false
      },
      ticks: {
        color: '#9ca3af',
        font: {
          size: 11,
          weight: '500'
        },
        padding: 8
      }
    },
    y: {
      grid: {
        color: '#f3f4f6',
        drawBorder: false
      },
      border: {
        display: false
      },
      ticks: {
        color: '#9ca3af',
        font: {
          size: 11,
          weight: '500'
        },
        padding: 12,
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
    <Line ref="chartRef" :data="chartData" :options="chartOptions" />
  </div>
</template>
