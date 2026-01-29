<script setup>
import { useRoute } from 'vue-router'
import { useUiStore } from '@/stores/ui'
import {
  Squares2X2Icon,
  UsersIcon,
  GlobeAltIcon,
  UserCircleIcon,
  DocumentTextIcon,
  ArrowsRightLeftIcon,
  DocumentChartBarIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const uiStore = useUiStore()

const navigation = [
  { name: 'Overview', route: '/', icon: Squares2X2Icon },
  { name: 'Visitors', route: '/visitor-identification', icon: UsersIcon },
  { name: 'By Website', route: '/websites', icon: GlobeAltIcon },
  { name: 'Personas', route: '/audiences', icon: UserCircleIcon },
  { name: 'Landing Pages', route: '/direct-mail', icon: DocumentTextIcon },
  { name: 'Compare Brands', route: '/analytics', icon: ArrowsRightLeftIcon },
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
  <aside class="fixed left-0 top-0 h-full w-[240px] bg-sidebar-bg flex flex-col z-50">
    <!-- Logo -->
    <div class="h-16 flex items-center px-6">
      <span class="text-[21px] font-bold italic text-logo-purple tracking-tight">data</span>
      <span class="text-[21px] font-bold italic text-white tracking-tight">Shopper</span>
    </div>

    <!-- Main Navigation -->
    <nav class="flex-1 px-4 pt-4 space-y-0.5 overflow-y-auto">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.route"
        class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-150"
        :class="[
          isActive(item.route)
            ? 'bg-accent text-sidebar-bg'
            : 'text-gray-400 hover:text-white hover:bg-sidebar-hover'
        ]"
      >
        <component
          :is="item.icon"
          class="w-5 h-5 flex-shrink-0"
          :class="isActive(item.route) ? 'text-sidebar-bg' : ''"
        />
        <span>{{ item.name }}</span>
      </router-link>
    </nav>

    <!-- Bottom Navigation -->
    <div class="px-4 py-6 space-y-0.5">
      <router-link
        v-for="item in bottomNav"
        :key="item.name"
        :to="item.route"
        class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-150"
        :class="[
          isActive(item.route)
            ? 'bg-accent text-sidebar-bg'
            : 'text-gray-400 hover:text-white hover:bg-sidebar-hover'
        ]"
      >
        <component
          :is="item.icon"
          class="w-5 h-5 flex-shrink-0"
          :class="isActive(item.route) ? 'text-sidebar-bg' : ''"
        />
        <span>{{ item.name }}</span>
      </router-link>
    </div>
  </aside>
</template>
