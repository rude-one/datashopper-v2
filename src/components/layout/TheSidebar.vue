<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navigation = [
  { name: 'Overview', route: '/', icon: 'grid' },
  { name: 'Visitors', route: '/visitor-identification', icon: 'users' },
  { name: 'By Website', route: '/websites', icon: 'globe' },
  { name: 'Personas', route: '/audiences', icon: 'user' },
  { name: 'Landing Pages', route: '/direct-mail', icon: 'pages' },
  { name: 'Compare Brands', route: '/analytics', icon: 'compare' },
  { name: 'Client Reports', route: '/integrations', icon: 'report' },
]

const bottomNav = [
  { name: 'Settings', route: '/settings', icon: 'settings' },
  { name: 'Help & Support', route: '/help', icon: 'help' },
]

function isActive(path) {
  return route.path === path
}
</script>

<template>
  <aside class="fixed left-0 top-0 h-full w-[240px] bg-[#1E2432] flex flex-col z-50">
    <!-- Logo -->
    <div class="h-[72px] flex items-center px-6">
      <span class="text-[28px] font-black italic tracking-tight" style="font-family: 'Nunito', sans-serif;">
        <span class="text-[#6C5CE7]">data</span><span class="text-white">Shopper</span>
      </span>
    </div>

    <!-- Main Navigation -->
    <nav class="flex-1 px-4 pt-2 space-y-1 overflow-y-auto">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.route"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-200"
        :class="[
          isActive(item.route)
            ? 'bg-[#00D9A5] text-[#1E2432]'
            : 'text-[#8B95A5] hover:bg-[#2A3142] hover:text-white'
        ]"
      >
        <!-- Icons -->
        <svg v-if="item.icon === 'grid'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke-width="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke-width="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke-width="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke-width="2"/>
        </svg>
        <svg v-else-if="item.icon === 'users'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <svg v-else-if="item.icon === 'globe'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
        <svg v-else-if="item.icon === 'user'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <svg v-else-if="item.icon === 'pages'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
        <svg v-else-if="item.icon === 'compare'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
        <svg v-else-if="item.icon === 'report'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <span>{{ item.name }}</span>
      </router-link>
    </nav>

    <!-- Bottom Navigation -->
    <div class="px-4 py-6 space-y-1">
      <router-link
        v-for="item in bottomNav"
        :key="item.name"
        :to="item.route"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-200"
        :class="[
          isActive(item.route)
            ? 'bg-[#00D9A5] text-[#1E2432]'
            : 'text-[#8B95A5] hover:bg-[#2A3142] hover:text-white'
        ]"
      >
        <svg v-if="item.icon === 'settings'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <svg v-else-if="item.icon === 'help'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>{{ item.name }}</span>
      </router-link>
    </div>
  </aside>
</template>
