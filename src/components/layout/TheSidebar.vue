<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUiStore } from '@/stores/ui'
import {
  HomeIcon,
  UserGroupIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UsersIcon,
  PuzzlePieceIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  Bars3Icon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()
const uiStore = useUiStore()

const expandedMenus = ref({
  'direct-mail': false,
  'audiences': false,
  'settings': false
})

const navigation = [
  { name: 'Overview', route: '/', icon: HomeIcon },
  { name: 'Visitor Identification', route: '/visitor-identification', icon: UserGroupIcon },
  {
    name: 'Direct Mail',
    icon: EnvelopeIcon,
    children: [
      { name: 'Campaigns', route: '/direct-mail' },
      { name: 'Templates', route: '/direct-mail/templates' }
    ]
  },
  { name: 'Websites', route: '/websites', icon: GlobeAltIcon },
  { name: 'Analytics', route: '/analytics', icon: ChartBarIcon },
  {
    name: 'Audiences',
    icon: UsersIcon,
    children: [
      { name: 'All Audiences', route: '/audiences' },
      { name: 'Segments', route: '/audiences/segments' }
    ]
  },
  { name: 'Integrations', route: '/integrations', icon: PuzzlePieceIcon },
  {
    name: 'Settings',
    icon: Cog6ToothIcon,
    children: [
      { name: 'General', route: '/settings' },
      { name: 'Team', route: '/settings/team' },
      { name: 'Billing', route: '/settings/billing' }
    ]
  },
  { name: 'API Docs', route: '/api-docs', icon: DocumentTextIcon },
  { name: 'Help', route: '/help', icon: QuestionMarkCircleIcon }
]

function toggleMenu(menuKey) {
  expandedMenus.value[menuKey] = !expandedMenus.value[menuKey]
}

function isActive(path) {
  return route.path === path
}

function isMenuActive(item) {
  if (item.route) {
    return route.path === item.route
  }
  if (item.children) {
    return item.children.some(child => route.path.startsWith(child.route))
  }
  return false
}
</script>

<template>
  <aside
    class="fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50"
    :class="uiStore.sidebarCollapsed ? 'w-16' : 'w-56'"
  >
    <!-- Logo -->
    <div class="h-16 flex items-center px-4 border-b border-gray-200">
      <button
        @click="uiStore.toggleSidebar"
        class="p-1.5 rounded-lg hover:bg-gray-100 mr-2"
      >
        <Bars3Icon class="w-5 h-5 text-gray-500" />
      </button>
      <div v-if="!uiStore.sidebarCollapsed" class="flex items-center">
        <span class="text-xl font-semibold text-primary-600">data</span>
        <span class="text-xl font-semibold text-gray-800">Shopper</span>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="p-3 space-y-1 overflow-y-auto h-[calc(100%-8rem)]">
      <template v-for="item in navigation" :key="item.name">
        <!-- Regular nav item -->
        <router-link
          v-if="item.route && !item.children"
          :to="item.route"
          class="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
          :class="[
            isActive(item.route)
              ? 'bg-primary-50 text-primary-600'
              : 'text-gray-600 hover:bg-gray-100'
          ]"
        >
          <component
            :is="item.icon"
            class="w-5 h-5 flex-shrink-0"
            :class="isActive(item.route) ? 'text-primary-600' : 'text-gray-400'"
          />
          <span v-if="!uiStore.sidebarCollapsed" class="ml-3">{{ item.name }}</span>
        </router-link>

        <!-- Expandable nav item -->
        <div v-else-if="item.children">
          <button
            @click="toggleMenu(item.name.toLowerCase().replace(' ', '-'))"
            class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            :class="[
              isMenuActive(item)
                ? 'bg-primary-50 text-primary-600'
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            <div class="flex items-center">
              <component
                :is="item.icon"
                class="w-5 h-5 flex-shrink-0"
                :class="isMenuActive(item) ? 'text-primary-600' : 'text-gray-400'"
              />
              <span v-if="!uiStore.sidebarCollapsed" class="ml-3">{{ item.name }}</span>
            </div>
            <ChevronDownIcon
              v-if="!uiStore.sidebarCollapsed"
              class="w-4 h-4 transition-transform"
              :class="expandedMenus[item.name.toLowerCase().replace(' ', '-')] ? 'rotate-180' : ''"
            />
          </button>

          <!-- Submenu -->
          <div
            v-if="!uiStore.sidebarCollapsed && expandedMenus[item.name.toLowerCase().replace(' ', '-')]"
            class="mt-1 ml-4 pl-4 border-l border-gray-200 space-y-1"
          >
            <router-link
              v-for="child in item.children"
              :key="child.name"
              :to="child.route"
              class="block px-3 py-2 rounded-lg text-sm transition-colors"
              :class="[
                isActive(child.route)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              ]"
            >
              {{ child.name }}
            </router-link>
          </div>
        </div>
      </template>
    </nav>

    <!-- Bottom actions -->
    <div class="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200 bg-white">
      <div class="flex items-center justify-center gap-2">
        <button class="p-2 rounded-lg hover:bg-gray-100">
          <Cog6ToothIcon class="w-5 h-5 text-gray-400" />
        </button>
        <div v-if="!uiStore.sidebarCollapsed" class="w-6 h-6 rounded overflow-hidden">
          <img src="https://flagcdn.com/us.svg" alt="US" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </aside>
</template>
