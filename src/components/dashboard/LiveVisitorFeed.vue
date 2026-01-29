<script setup>
defineProps({
  visitors: {
    type: Array,
    required: true
    // [{ brand: 'Brand', path: '/page', email: 'email@example.com', status: 'anonymous', time: 'less than a minute ago' }]
  }
})
</script>

<template>
  <div class="card p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h3 class="text-lg font-semibold text-gray-900">Live Visitor Feed</h3>
        <p class="text-sm text-gray-500 mt-0.5">Real-time visitor activity stream</p>
      </div>
      <span class="live-indicator">LIVE</span>
    </div>

    <!-- Visitor list -->
    <div class="space-y-1">
      <div
        v-for="(visitor, index) in visitors"
        :key="index"
        class="flex items-center justify-between py-3 px-3 -mx-3 rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div class="flex items-center gap-3">
          <!-- Status indicator -->
          <span
            class="w-2.5 h-2.5 rounded-full flex-shrink-0"
            :class="visitor.status === 'active' ? 'bg-primary-500' : 'bg-amber-400'"
          ></span>

          <!-- Info -->
          <div>
            <div class="flex items-center gap-2">
              <span class="font-medium text-gray-900">{{ visitor.brand }}</span>
              <template v-if="visitor.email">
                <span class="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                  {{ visitor.initials }}
                </span>
                <span class="text-xs text-gray-500">{{ visitor.email }}</span>
              </template>
            </div>
            <p class="text-sm text-gray-500 mt-0.5">{{ visitor.path }}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Status badge -->
          <span
            class="badge"
            :class="visitor.status === 'active' ? 'badge-active' : 'badge-anonymous'"
          >
            {{ visitor.status === 'active' ? 'Active Duty' : 'Anonymous' }}
          </span>

          <!-- Time -->
          <span class="text-xs text-gray-400 whitespace-nowrap">{{ visitor.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
