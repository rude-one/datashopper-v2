<script setup>
import { ref } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'
import {
  MoonIcon,
  BellIcon,
  UserCircleIcon,
  ChevronDownIcon,
  CalendarIcon
} from '@heroicons/vue/24/outline'

const dashboardStore = useDashboardStore()

const showWebsiteDropdown = ref(false)
const startDate = ref(dashboardStore.dateRange.start)
const endDate = ref(dashboardStore.dateRange.end)

function selectWebsite(website) {
  dashboardStore.setSelectedWebsite(website)
  showWebsiteDropdown.value = false
}

function runReport() {
  dashboardStore.setDateRange(startDate.value, endDate.value)
  dashboardStore.fetchDashboardData()
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  })
}
</script>

<template>
  <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
    <!-- Website selector -->
    <div class="relative">
      <button
        @click="showWebsiteDropdown = !showWebsiteDropdown"
        class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <div class="w-6 h-6 rounded bg-primary-100 flex items-center justify-center">
          <span class="text-sm font-semibold text-primary-600">
            {{ dashboardStore.selectedWebsite.icon }}
          </span>
        </div>
        <span class="text-sm font-medium text-gray-700">
          {{ dashboardStore.selectedWebsite.name }}
        </span>
        <ChevronDownIcon class="w-4 h-4 text-gray-400" />
      </button>

      <!-- Dropdown -->
      <div
        v-if="showWebsiteDropdown"
        class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
      >
        <button
          v-for="website in dashboardStore.websites"
          :key="website.id"
          @click="selectWebsite(website)"
          class="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors"
        >
          <div class="w-6 h-6 rounded bg-primary-100 flex items-center justify-center">
            <span class="text-sm font-semibold text-primary-600">{{ website.icon }}</span>
          </div>
          <span class="text-sm text-gray-700">{{ website.name }}</span>
        </button>
      </div>
    </div>

    <!-- Right section -->
    <div class="flex items-center gap-4">
      <!-- Date range picker -->
      <div class="flex items-center gap-2">
        <div class="relative">
          <CalendarIcon class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            v-model="startDate"
            type="date"
            class="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <span class="text-gray-400 text-sm">to</span>
        <div class="relative">
          <CalendarIcon class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            v-model="endDate"
            type="date"
            class="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <button
          @click="runReport"
          class="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Run
        </button>
      </div>

      <!-- Action buttons -->
      <div class="flex items-center gap-2 border-l border-gray-200 pl-4">
        <button class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <MoonIcon class="w-5 h-5 text-gray-500" />
        </button>
        <button class="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
          <BellIcon class="w-5 h-5 text-gray-500" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <UserCircleIcon class="w-6 h-6 text-gray-500" />
        </button>
      </div>
    </div>
  </header>
</template>
