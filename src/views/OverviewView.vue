<script setup>
import { onMounted, computed } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'
import LineChart from '@/components/charts/LineChart.vue'
import DonutChart from '@/components/charts/DonutChart.vue'
import LiveVisitorFeed from '@/components/dashboard/LiveVisitorFeed.vue'

const dashboardStore = useDashboardStore()

onMounted(() => {
  dashboardStore.fetchDashboardData()
})

const chartDatasets = computed(() => [
  {
    label: 'Total Traffic',
    data: dashboardStore.chartData.filtered,
    borderColor: '#8b5cf6',
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    fill: true
  },
  {
    label: 'Identified Visitors',
    data: dashboardStore.chartData.identified,
    borderColor: '#c4b5fd',
    backgroundColor: 'transparent',
    fill: false
  }
])
</script>

<template>
  <div class="space-y-6">
    <!-- Main Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Traffic Chart Card -->
      <div class="col-span-12 xl:col-span-8">
        <div class="card p-6">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h2 class="text-lg font-semibold text-gray-900">Traffic & Identification Trend</h2>
              <p class="text-sm text-gray-500 mt-1">Daily visitors vs identified contacts</p>
            </div>
            <div class="live-badge">LIVE</div>
          </div>

          <div class="h-[280px]">
            <LineChart
              v-if="dashboardStore.chartData.labels.length > 0"
              :labels="dashboardStore.chartData.labels"
              :datasets="chartDatasets"
            />
            <div v-else class="h-full flex items-center justify-center">
              <div class="flex flex-col items-center gap-3">
                <div class="w-8 h-8 border-2 border-gray-200 border-t-brand rounded-full animate-spin"></div>
                <span class="text-sm text-gray-400">Loading data...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Donut Chart Card -->
      <div class="col-span-12 xl:col-span-4">
        <div class="card p-6 h-full">
          <div class="mb-8">
            <h2 class="text-lg font-semibold text-gray-900">Traffic by Brand</h2>
            <p class="text-sm text-gray-500 mt-1">Distribution across portfolio</p>
          </div>
          <DonutChart :data="dashboardStore.trafficByBrand" />
        </div>
      </div>
    </div>

    <!-- Live Visitor Feed -->
    <LiveVisitorFeed :visitors="dashboardStore.liveVisitors" />
  </div>
</template>
