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
  <header class="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6">
    <!-- Search bar -->
    <div class="flex-1 max-w-xl">
      <div class="relative">
        <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="w-full pl-12 pr-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:bg-white transition-all"
        />
      </div>
    </div>

    <!-- Right section -->
    <div class="flex items-center gap-4">
      <!-- Notifications -->
      <button class="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
        <BellIcon class="w-5 h-5 text-gray-500" />
        <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-500 rounded-full ring-2 ring-white"></span>
      </button>

      <!-- User profile -->
      <div class="relative">
        <button
          @click="showProfileDropdown = !showProfileDropdown"
          class="flex items-center gap-3 pl-4 pr-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-sm">
            <span class="text-sm font-semibold text-white">{{ user.initials }}</span>
          </div>
          <div class="text-left hidden sm:block">
            <p class="text-sm font-semibold text-gray-900">{{ user.name }}</p>
            <p class="text-xs text-gray-500">{{ user.plan }}</p>
          </div>
          <ChevronDownIcon class="w-4 h-4 text-gray-400 hidden sm:block" />
        </button>

        <!-- Dropdown -->
        <div
          v-if="showProfileDropdown"
          class="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
        >
          <div class="px-4 py-3 border-b border-gray-100">
            <p class="text-sm font-semibold text-gray-900">{{ user.name }}</p>
            <p class="text-xs text-gray-500">{{ user.plan }}</p>
          </div>
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Account Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Billing</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Team Members</a>
          </div>
          <div class="border-t border-gray-100 pt-1">
            <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Sign Out</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
