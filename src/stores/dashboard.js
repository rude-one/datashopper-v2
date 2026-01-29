import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDashboardStore = defineStore('dashboard', () => {
  // State
  const selectedWebsite = ref({
    id: '1',
    name: 'TradeStation',
    icon: 'T'
  })

  const websites = ref([
    { id: '1', name: 'TradeStation', icon: 'T' },
    { id: '2', name: 'Demo Site', icon: 'D' }
  ])

  const dateRange = ref({
    start: '2026-01-01',
    end: '2026-01-28'
  })

  const metrics = ref({
    users: 286815,
    visitorsIdentified: 30872,
    identifiedButFiltered: 107869
  })

  const chartData = ref({
    labels: [],
    users: [],
    identified: [],
    filtered: []
  })

  const topPages = ref([
    { path: '/platforms-and-tools', count: 6070 },
    { path: '/tradingview/new-options-tv', count: 5897 },
    { path: '/trading-products/futures', count: 3768 }
  ])

  const topSources = ref([
    { source: 'Organic', count: 14279 },
    { source: 'google.com', count: 5392 },
    { source: 'syndicatedsearch.goog', count: 2601 }
  ])

  const topCities = ref([
    { city: 'Houston', count: 284 },
    { city: 'Austin', count: 230 },
    { city: 'Dallas', count: 198 }
  ])

  const insights = ref({
    title: 'Effective targeting achieved with a solid filtering process at TradeStation',
    content: `Among the 286,815 visitors, we identified 107,869 with a match rate of 37.61%. From there, we further curated the list based on your set filters down to 30,872 amount of results. This selective approach helps in focusing marketing efforts on the most promising leads, improving both efficiency and potential returns on investment. The data underscores good segmentation which can be pivotal for targeted marketing and personalized advertising strategies.`
  })

  const isLoading = ref(false)

  // Actions
  function setDateRange(start, end) {
    dateRange.value = { start, end }
  }

  function setSelectedWebsite(website) {
    selectedWebsite.value = website
  }

  async function fetchDashboardData() {
    isLoading.value = true
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/dashboard?websiteId=${selectedWebsite.value.id}&start=${dateRange.value.start}&end=${dateRange.value.end}`)
      // const data = await response.json()

      // Generate mock chart data
      const days = []
      const users = []
      const identified = []
      const filtered = []

      const startDate = new Date(dateRange.value.start)
      const endDate = new Date(dateRange.value.end)

      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        days.push(d.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }))
        users.push(Math.floor(Math.random() * 5000) + 8000)
        identified.push(Math.floor(Math.random() * 2000) + 2000)
        filtered.push(Math.floor(Math.random() * 3000) + 3000)
      }

      chartData.value = {
        labels: days,
        users,
        identified,
        filtered
      }
    } finally {
      isLoading.value = false
    }
  }

  // Computed
  const matchRate = computed(() => {
    if (metrics.value.users === 0) return 0
    return ((metrics.value.identifiedButFiltered / metrics.value.users) * 100).toFixed(2)
  })

  return {
    // State
    selectedWebsite,
    websites,
    dateRange,
    metrics,
    chartData,
    topPages,
    topSources,
    topCities,
    insights,
    isLoading,
    // Actions
    setDateRange,
    setSelectedWebsite,
    fetchDashboardData,
    // Computed
    matchRate
  }
})
