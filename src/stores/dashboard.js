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

  // Traffic by brand data
  const trafficByBrand = ref([
    { label: 'Popular Science', value: 28, color: '#8b5cf6' },
    { label: 'Bob Vila', value: 22, color: '#c4b5fd' },
    { label: 'The Drive', value: 18, color: '#6366f1' },
    { label: 'Outdoor Life', value: 15, color: '#22c55e' },
    { label: 'Other', value: 17, color: '#9ca3af' }
  ])

  // Live visitor feed data
  const liveVisitors = ref([
    {
      brand: 'We Are The Mighty',
      path: '/best-cordless-drills',
      email: null,
      initials: null,
      status: 'anonymous',
      time: 'less than a minute ago'
    },
    {
      brand: 'Domino',
      path: '/james-webb-new-discoveries',
      email: 'm***@outlook.com',
      initials: 'M.',
      status: 'active',
      time: 'less than a minute ago'
    },
    {
      brand: 'Dwell',
      path: '/best-cordless-drills',
      email: null,
      initials: null,
      status: 'anonymous',
      time: 'less than a minute ago'
    },
    {
      brand: 'Popular Science',
      path: '/space-exploration-2026',
      email: 'j***@gmail.com',
      initials: 'J.',
      status: 'active',
      time: '2 minutes ago'
    },
    {
      brand: 'The Drive',
      path: '/electric-vehicle-reviews',
      email: null,
      initials: null,
      status: 'anonymous',
      time: '3 minutes ago'
    }
  ])

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
      // Generate mock chart data
      const days = []
      const users = []
      const identified = []
      const filtered = []

      const startDate = new Date(dateRange.value.start)
      const endDate = new Date(dateRange.value.end)

      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        days.push(d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }))
        users.push(Math.floor(Math.random() * 30000) + 40000)
        identified.push(Math.floor(Math.random() * 20000) + 60000)
        filtered.push(Math.floor(Math.random() * 25000) + 75000)
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
    trafficByBrand,
    liveVisitors,
    isLoading,
    // Actions
    setDateRange,
    setSelectedWebsite,
    fetchDashboardData,
    // Computed
    matchRate
  }
})
