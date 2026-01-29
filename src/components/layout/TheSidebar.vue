<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUiStore } from '@/stores/ui'
import {
  Squares2X2Icon,
  UserGroupIcon,
  GlobeAltIcon,
  UserIcon,
  RectangleStackIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const uiStore = useUiStore()

const navigation = [
  { name: 'Overview', route: '/', icon: Squares2X2Icon },
  { name: 'Visitors', route: '/visitor-identification', icon: UserGroupIcon },
  { name: 'By Website', route: '/websites', icon: GlobeAltIcon },
  { name: 'Personas', route: '/audiences', icon: UserIcon },
  { name: 'Landing Pages', route: '/direct-mail', icon: RectangleStackIcon },
  { name: 'Compare Brands', route: '/analytics', icon: ChartBarSquareIcon },
  { name: 'Client Reports', route: '/integrations', icon: ChartBarSquareIcon },
]

const bottomNav = [
  { name: 'Settings', route: '/settings', icon: Cog6ToothIcon },
  { name: 'Help & Support', route: '/help', icon: QuestionMarkCircleIcon },
]

function isActive(path) {
  return route.path === path
}
</script>

<template>
  <aside
    class="fixed left-0 top-0 h-full bg-sidebar transition-all duration-300 z-50 flex flex-col"
    :class="uiStore.sidebarCollapsed ? 'w-16' : 'w-56'"
  >
    <!-- Logo -->
    <div class="h-16 flex items-center px-4">
      <div class="flex items-center gap-1">
        <span class="text-xl font-semibold text-white tracking-tight">data</span>
        <span class="text-xl font-semibold text-primary-400 tracking-tight">Shopper</span>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
      <template v-for="item in navigation" :key="item.name">
        <router-link
          :to="item.route"
          class="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
          :class="[
            isActive(item.route)
              ? 'bg-primary-500/20 text-primary-400'
              : 'text-gray-400 hover:text-white hover:bg-sidebar-light'
          ]"
        >
          <component
            :is="item.icon"
            class="w-5 h-5 flex-shrink-0 transition-colors"
            :class="isActive(item.route) ? 'text-primary-400' : 'text-gray-500 group-hover:text-gray-300'"
          />
          <span v-if="!uiStore.sidebarCollapsed" class="truncate">{{ item.name }}</span>
        </router-link>
      </template>
    </nav>

    <!-- Bottom Navigation -->
    <div class="px-3 py-4 border-t border-sidebar-border space-y-1">
      <template v-for="item in bottomNav" :key="item.name">
        <router-link
          :to="item.route"
          class="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
          :class="[
            isActive(item.route)
              ? 'bg-primary-500/20 text-primary-400'
              : 'text-gray-400 hover:text-white hover:bg-sidebar-light'
          ]"
        >
          <component
            :is="item.icon"
            class="w-5 h-5 flex-shrink-0 transition-colors"
            :class="isActive(item.route) ? 'text-primary-400' : 'text-gray-500 group-hover:text-gray-300'"
          />
          <span v-if="!uiStore.sidebarCollapsed" class="truncate">{{ item.name }}</span>
        </router-link>
      </template>
    </div>
  </aside>
</template>
