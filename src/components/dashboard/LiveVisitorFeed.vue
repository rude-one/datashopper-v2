<script setup>
defineProps({
  visitors: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-[17px] font-semibold text-gray-900">Live Visitor Feed</h3>
        <p class="text-sm text-gray-500 mt-0.5">Real-time visitor activity stream</p>
      </div>
      <div class="flex items-center gap-2 text-accent text-sm font-medium">
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        LIVE
      </div>
    </div>

    <!-- Visitor list -->
    <div class="space-y-0">
      <div
        v-for="(visitor, index) in visitors"
        :key="index"
        class="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
      >
        <div class="flex items-center gap-3">
          <!-- Status dot -->
          <span
            class="w-2.5 h-2.5 rounded-full flex-shrink-0"
            :class="visitor.status === 'active' ? 'bg-accent' : 'bg-amber-400'"
          ></span>

          <!-- Info -->
          <div>
            <div class="flex items-center gap-2">
              <span class="font-semibold text-gray-900">{{ visitor.brand }}</span>
              <template v-if="visitor.email">
                <span class="text-xs text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded font-medium">
                  {{ visitor.initials }}
                </span>
                <span class="text-xs text-gray-500 font-medium">{{ visitor.email }}</span>
              </template>
            </div>
            <p class="text-sm text-gray-400">{{ visitor.path }}</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <!-- Status badge -->
          <span
            class="px-3 py-1 rounded-full text-xs font-medium"
            :class="visitor.status === 'active'
              ? 'bg-accent/10 text-accent'
              : 'border border-gray-300 text-gray-600'"
          >
            {{ visitor.status === 'active' ? 'Active Duty' : 'Anonymous' }}
          </span>

          <!-- Time -->
          <span class="text-sm text-gray-400 w-[140px] text-right">{{ visitor.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
