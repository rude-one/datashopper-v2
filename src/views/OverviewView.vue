<script setup>
import { onMounted, computed } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'
import MetricCard from '@/components/dashboard/MetricCard.vue'
import LineChart from '@/components/charts/LineChart.vue'
import ChartLegend from '@/components/dashboard/ChartLegend.vue'
import InsightsPanel from '@/components/dashboard/InsightsPanel.vue'
import DataTable from '@/components/dashboard/DataTable.vue'

const dashboardStore = useDashboardStore()

onMounted(() => {
  dashboardStore.fetchDashboardData()
})

const chartDatasets = computed(() => [
  {
    label: 'Users',
    data: dashboardStore.chartData.users,
    borderColor: '#3b82f6',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    fill: true
  },
  {
    label: 'Identified but Filtered',
    data: dashboardStore.chartData.filtered,
    borderColor: '#8b5cf6',
    backgroundColor: 'transparent',
    fill: false
  },
  {
    label: 'Visitors Identified',
    data: dashboardStore.chartData.identified,
    borderColor: '#06b6d4',
    backgroundColor: 'transparent',
    fill: false
  }
])

const legendItems = [
  { label: 'Users', color: '#3b82f6' },
  { label: 'Identified but Filtered', color: '#8b5cf6' },
  { label: 'Visitors Identified', color: '#06b6d4' }
]

const topPagesFormatted = computed(() =>
  dashboardStore.topPages.map(p => ({ label: p.path, value: p.count }))
)

const topSourcesFormatted = computed(() =>
  dashboardStore.topSources.map(s => ({ label: s.source, value: s.count }))
)

const topCitiesFormatted = computed(() =>
  dashboardStore.topCities.map(c => ({ label: c.city, value: c.count }))
)
</script>

<template>
  <div class="space-y-6">
    <!-- Top section: Metrics + Chart + Insights -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Left: Metrics and Chart -->
      <div class="col-span-12 lg:col-span-8">
        <div class="bg-white rounded-xl border border-gray-200 p-6">
          <!-- Metrics -->
          <div class="flex items-center gap-12 mb-6">
            <MetricCard
              label="Users"
              :value="dashboardStore.metrics.users"
            />
            <MetricCard
              label="Visitors Identified"
              :value="dashboardStore.metrics.visitorsIdentified"
            />
            <MetricCard
              label="Identified But Filtered"
              :value="dashboardStore.metrics.identifiedButFiltered"
            />
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
              Loading chart data...
            </div>
          </div>

          <!-- Legend -->
          <ChartLegend :items="legendItems" />
        </div>
      </div>

      <!-- Right: Insights -->
      <div class="col-span-12 lg:col-span-4">
        <InsightsPanel
          :title="dashboardStore.insights.title"
          :content="dashboardStore.insights.content"
        />
      </div>
    </div>

    <!-- Bottom section: Data tables -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DataTable
        title="Top Pages"
        :items="topPagesFormatted"
      />
      <DataTable
        title="Top Sources"
        :items="topSourcesFormatted"
      />
      <DataTable
        title="Top Cities"
        :items="topCitiesFormatted"
      />
    </div>
  </div>
</template>
