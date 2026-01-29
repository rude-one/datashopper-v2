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
    label: 'Traffic',
    data: dashboardStore.chartData.filtered,
    borderColor: '#8b5cf6',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    fill: true
  },
  {
    label: 'Identified Contacts',
    data: dashboardStore.chartData.identified,
    borderColor: '#6366f1',
    backgroundColor: 'transparent',
    fill: false
  }
])
</script>

<template>
  <div class="space-y-6 animate-fade-in">
    <!-- Top Row: Chart + Donut -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Traffic Chart -->
      <div class="col-span-12 lg:col-span-8">
        <div class="card p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-lg font-semibold text-gray-900">Traffic & Identification Trend</h2>
              <p class="text-sm text-gray-500 mt-0.5">Daily visitors vs identified contacts</p>
            </div>
            <span class="live-indicator">LIVE</span>
          </div>

          <!-- Chart -->
          <div class="h-72">
            <LineChart
              v-if="dashboardStore.chartData.labels.length > 0"
              :labels="dashboardStore.chartData.labels"
              :datasets="chartDatasets"
            />
            <div
              v-else
              class="h-full flex items-center justify-center text-gray-400"
            >
              <div class="flex flex-col items-center gap-2">
                <div class="w-8 h-8 border-2 border-gray-200 border-t-primary-500 rounded-full animate-spin"></div>
                <span class="text-sm">Loading chart data...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Traffic by Brand -->
      <div class="col-span-12 lg:col-span-4">
        <div class="card p-6 h-full">
          <div class="mb-6">
            <h2 class="text-lg font-semibold text-gray-900">Traffic by Brand</h2>
            <p class="text-sm text-gray-500 mt-0.5">Distribution across portfolio</p>
          </div>
          <DonutChart :data="dashboardStore.trafficByBrand" />
        </div>
      </div>
    </div>

    <!-- Live Visitor Feed -->
    <LiveVisitorFeed :visitors="dashboardStore.liveVisitors" />
  </div>
</template>
