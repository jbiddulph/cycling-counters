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
    <LineChart v-if="counters.length > 0" :counters="counters" />
  </div>
</template>

<script setup>
import CounterItem from '@/components/Counters/CounterItem.vue'
import LineChart from '@/components/Counters/LineChart.vue'
import { useCounterStore } from '@/stores/counterStore'
import { onMounted, ref, reactive,  } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
/* Counter */
const counters = ref([])
const center = reactive({
  lat: 55.872011,
  lng: -4.2658899
})

switch (route.path) {
  case '/':
    center.lat = 55.872011
    center.lng = -4.2658899
    break;
  case '/john-muir-way':
    center.lat = 56.0059647
    center.lng = -3.9032789
    break;
  case '/edinburgh-council':
    center.lat = 55.9412083
    center.lng = -3.2053387
    break;
  default:
    break;
}
const counterStore = useCounterStore()

onMounted(async () => {
  await counterStore.fetchCounters()
  counters.value = counterStore.counters
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
