<script setup>
import { useRoute } from 'vue-router'
import { useUiStore } from '@/stores/ui'
import {
  Squares2X2Icon,
  UserGroupIcon,
  GlobeAltIcon,
  UserIcon,
  DocumentDuplicateIcon,
  ScaleIcon,
  DocumentChartBarIcon,
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
  { name: 'Landing Pages', route: '/direct-mail', icon: DocumentDuplicateIcon },
  { name: 'Compare Brands', route: '/analytics', icon: ScaleIcon },
  { name: 'Client Reports', route: '/integrations', icon: DocumentChartBarIcon },
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
    class="fixed left-0 top-0 h-full bg-sidebar transition-all duration-300 z-50 flex flex-col shadow-xl"
    :class="uiStore.sidebarCollapsed ? 'w-[72px]' : 'w-[220px]'"
  >
    <!-- Logo -->
    <div class="h-[72px] flex items-center px-5 border-b border-white/5">
      <div class="flex items-center">
        <span class="text-[22px] font-semibold text-white tracking-tight">data</span>
        <span class="text-[22px] font-semibold text-brand tracking-tight">Shopper</span>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.route"
        class="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
        :class="[
          isActive(item.route)
            ? 'bg-brand/15 text-brand'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        ]"
      >
        <component
          :is="item.icon"
          class="w-[18px] h-[18px] flex-shrink-0"
          :class="isActive(item.route) ? 'text-brand' : 'text-gray-500 group-hover:text-gray-300'"
        />
        <span v-if="!uiStore.sidebarCollapsed">{{ item.name }}</span>
      </router-link>
    </nav>

    <!-- Bottom Navigation -->
    <div class="px-3 py-4 border-t border-white/5 space-y-1">
      <router-link
        v-for="item in bottomNav"
        :key="item.name"
        :to="item.route"
        class="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
        :class="[
          isActive(item.route)
            ? 'bg-brand/15 text-brand'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        ]"
      >
        <component
          :is="item.icon"
          class="w-[18px] h-[18px] flex-shrink-0"
          :class="isActive(item.route) ? 'text-brand' : 'text-gray-500 group-hover:text-gray-300'"
        />
        <span v-if="!uiStore.sidebarCollapsed">{{ item.name }}</span>
      </router-link>
    </div>
  </aside>
</template>
