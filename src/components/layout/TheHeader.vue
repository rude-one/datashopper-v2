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
  <header class="h-[72px] bg-white border-b border-gray-200/60 flex items-center justify-between px-8">
    <!-- Search bar -->
    <div class="flex-1 max-w-lg">
      <div class="relative">
        <MagnifyingGlassIcon class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="w-full pl-11 pr-4 py-2.5 bg-gray-50/80 border border-gray-200/60 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand/30 focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all"
        />
      </div>
    </div>

    <!-- Right section -->
    <div class="flex items-center gap-3">
      <!-- Notifications -->
      <button class="relative p-2.5 rounded-xl hover:bg-gray-50 transition-colors">
        <BellIcon class="w-5 h-5 text-gray-500" />
        <span class="absolute top-2 right-2 w-2 h-2 bg-brand rounded-full ring-2 ring-white"></span>
      </button>

      <!-- User profile -->
      <div class="relative ml-2">
        <button
          @click="showProfileDropdown = !showProfileDropdown"
          class="flex items-center gap-3 py-1.5 pl-1.5 pr-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <div class="w-9 h-9 rounded-lg bg-brand flex items-center justify-center">
            <span class="text-sm font-semibold text-white">{{ user.initials }}</span>
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-gray-900 leading-tight">{{ user.name }}</p>
            <p class="text-xs text-gray-500 leading-tight">{{ user.plan }}</p>
          </div>
          <ChevronDownIcon class="w-4 h-4 text-gray-400 ml-1" />
        </button>

        <!-- Dropdown -->
        <Transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div
            v-if="showProfileDropdown"
            class="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-card-lg border border-gray-100 py-1.5 z-50"
          >
            <div class="px-4 py-3 border-b border-gray-100">
              <p class="text-sm font-semibold text-gray-900">{{ user.name }}</p>
              <p class="text-xs text-gray-500 mt-0.5">{{ user.plan }}</p>
            </div>
            <div class="py-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Account Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Billing</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Team Members</a>
            </div>
            <div class="border-t border-gray-100 pt-1">
              <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">Sign Out</a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>
