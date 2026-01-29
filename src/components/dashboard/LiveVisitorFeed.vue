<script setup>
defineProps({
  visitors: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="card p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h3 class="text-lg font-semibold text-gray-900">Live Visitor Feed</h3>
        <p class="text-sm text-gray-500 mt-1">Real-time visitor activity stream</p>
      </div>
      <div class="live-badge">LIVE</div>
    </div>

    <!-- Visitor list -->
    <div class="divide-y divide-gray-100">
      <div
        v-for="(visitor, index) in visitors"
        :key="index"
        class="flex items-center justify-between py-4 first:pt-0 last:pb-0"
      >
        <div class="flex items-center gap-3">
          <!-- Status dot -->
          <span
            class="w-2 h-2 rounded-full flex-shrink-0"
            :class="visitor.status === 'active' ? 'bg-brand' : 'bg-amber-400'"
          ></span>

          <!-- Info -->
          <div class="min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="font-medium text-gray-900">{{ visitor.brand }}</span>
              <template v-if="visitor.email">
                <span class="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded font-medium">
                  {{ visitor.initials }}
                </span>
                <span class="text-xs text-gray-500">{{ visitor.email }}</span>
              </template>
            </div>
            <p class="text-sm text-gray-400 mt-0.5 truncate">{{ visitor.path }}</p>
          </div>
        </div>

        <div class="flex items-center gap-4 flex-shrink-0 ml-4">
          <!-- Status badge -->
          <span
            class="px-2.5 py-1 rounded-lg text-xs font-medium"
            :class="visitor.status === 'active'
              ? 'bg-brand/10 text-brand border border-brand/20'
              : 'bg-gray-100 text-gray-600 border border-gray-200'"
          >
            {{ visitor.status === 'active' ? 'Active Duty' : 'Anonymous' }}
          </span>

          <!-- Time -->
          <span class="text-xs text-gray-400 whitespace-nowrap w-[120px] text-right">{{ visitor.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
