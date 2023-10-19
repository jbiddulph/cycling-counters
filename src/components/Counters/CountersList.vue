<template>
  <div class="home container mx-auto">
    <GoogleMap
      api-key="AIzaSyBWiPC71sMkSoaa0TNrioE8CP1Ll5HmpZ4"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="12"
    >
      <Marker v-for="counter in counters" :options="markerOptions(counter)" :key="counter.usmart_id">
        <InfoWindow :options="infoWindowOptions(counter)">
          <CounterItem :counter="counter" />
        </InfoWindow>
      </Marker>
    </GoogleMap>
    <div class="chart-container overflow-x-auto">
      <div class="chart-scroll">
        <canvas id="acquisitions"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import CounterItem from '@/components/Counters/CounterItem.vue'
import { useCounterStore } from '@/stores/counterStore'
import { onMounted, ref, reactive } from 'vue'
import Chart from 'chart.js/auto'

/* Counter */
const counters = ref([])
const center = reactive({
  lat: 55.872011,
  lng: -4.2658899
})
const counterStore = useCounterStore()

onMounted(async () => {
    await counterStore.fetchCounters()
    counters.value = counterStore.counters

    new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: counters.value.map(row => {
          const date = new Date(row.startTime)
          return date.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Count',
            data: counters.value.map(row => row.count)
          }
        ]
      }
    }
  )
})

const markerOptions = (counter) => {
  return {
    position: { lat: counter.latitude, lng: counter.longitude },
  }
}

const infoWindowOptions = (counter) => {
  return {
    position: { lat: counter.latitude, lng: counter.longitude },
  }
}
</script>

<style>
.chart-container {
  width: 100%;
  overflow-x: auto;
}

.chart-scroll {
  width: 2400px; /* Adjust this width as needed */
}
</style>