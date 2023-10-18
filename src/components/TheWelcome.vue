<script setup>

</script>

<template>
  <div>
    <h2>Welcome</h2>
    {{ counters }}
  </div>
</template>

<script setup>

import { useCounterStore } from '@/stores/counterStore'
import { onMounted, reactive, ref } from 'vue'

/* Counter */
const counters = ref([])

const counter = reactive({
  provider: '',
  area: '',
  siteID: '',
  location: '',
  latitude: '',
  longitude: '',
  startTime: '',
  endTime: '',
  count: 0,
  usmart_id: ''
})

const counterStore = useCounterStore()

  onMounted(async () => {
      await counterStore.fetchCounters()
      counters.value = counterStore.counters
  })

</script>
