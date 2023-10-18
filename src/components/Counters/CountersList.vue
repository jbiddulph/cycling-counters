<template>
  <div class="home container mx-auto">
    <GoogleMap
      :api-key="process.env.VUE_APP_GOOGLE_MAP_API_KEY"
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
  </div>
</template>

<script setup>
import CounterItem from '@/components/Counters/CounterItem.vue'
import { useCounterStore } from '@/stores/counterStore'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
import { onMounted, ref, reactive } from 'vue'

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
