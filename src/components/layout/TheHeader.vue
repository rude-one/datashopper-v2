<script setup>
import { ref } from 'vue'
import {
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

const searchQuery = ref('')
const showProfileDropdown = ref(false)

const user = {
  name: 'Recurrent Media',
  plan: 'Enterprise Plan',
  initials: 'RM'
}
</script>

<template>
  <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
    <!-- Search bar -->
    <div class="flex-1 max-w-md">
      <div class="relative">
        <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
        />
      </div>
    </div>

    <!-- Right section -->
    <div class="flex items-center gap-2">
      <!-- Notifications -->
      <button class="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <BellIcon class="w-5 h-5 text-gray-500" />
      </button>

      <!-- User profile -->
      <div class="relative">
        <button
          @click="showProfileDropdown = !showProfileDropdown"
          class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div class="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span class="text-xs font-bold text-white">{{ user.initials }}</span>
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900">{{ user.name }}</p>
            <p class="text-xs text-gray-500">{{ user.plan }}</p>
          </div>
          <ChevronDownIcon class="w-4 h-4 text-gray-400" />
        </button>

        <!-- Dropdown -->
        <div
          v-if="showProfileDropdown"
          class="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
        >
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Account Settings</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Billing</a>
          <div class="border-t border-gray-100 my-1"></div>
          <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Sign Out</a>
        </div>
      </div>
    </div>
  </header>
</template>
