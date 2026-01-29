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
    label: 'Daily visitors',
    data: dashboardStore.chartData.filtered,
    borderColor: '#8B5CF6',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    fill: true
  },
  {
    label: 'Identified contacts',
    data: dashboardStore.chartData.identified,
    borderColor: '#C4B5FD',
    backgroundColor: 'transparent',
    fill: false
  }
])
</script>

<template>
  <div class="space-y-6">
    <!-- Top Row -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Traffic & Identification Trend -->
      <div class="col-span-12 lg:col-span-8">
        <div class="bg-white rounded-xl border border-gray-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-[17px] font-semibold text-gray-900">Traffic & Identification Trend</h2>
              <p class="text-sm text-gray-500 mt-0.5">Daily visitors vs identified contacts</p>
            </div>
            <div class="flex items-center gap-2 text-accent text-sm font-medium">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              LIVE
            </div>
          </div>

          <div class="h-[300px]">
            <LineChart
              v-if="dashboardStore.chartData.labels.length > 0"
              :labels="dashboardStore.chartData.labels"
              :datasets="chartDatasets"
            />
            <div v-else class="h-full flex items-center justify-center">
              <div class="w-6 h-6 border-2 border-gray-200 border-t-accent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Traffic by Brand -->
      <div class="col-span-12 lg:col-span-4">
        <div class="bg-white rounded-xl border border-gray-200 p-6 h-full">
          <div class="mb-6">
            <h2 class="text-[17px] font-semibold text-gray-900">Traffic by Brand</h2>
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
