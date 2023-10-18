<template>
  <div class="home container mx-auto">
    <h2>Welcome</h2>
    <div v-for="counter in counters" :key="counter.usmart_id">
      <CounterItem :counter="counter" />
    </div>
  </div>
</template>

<script setup>
import CounterItem from '@/components/Counters/CounterItem.vue'
import { useCounterStore } from '@/stores/counterStore'
import { onMounted, ref } from 'vue'

/* Counter */
const counters = ref([])
const counterStore = useCounterStore()

onMounted(async () => {
    await counterStore.fetchCounters()
    counters.value = counterStore.counters
})
</script>
