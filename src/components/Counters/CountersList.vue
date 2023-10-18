<template>
  <div class="home container mx-auto">
    <GoogleMap
      api-key="AIzaSyBWiPC71sMkSoaa0TNrioE8CP1Ll5HmpZ4"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="12"
    >
      <!-- Use v-for to loop through counters and add markers -->
      <Marker v-for="counter in counters" :options="markerOptions(counter)" :key="counter.usmart_id">
        <!-- Use InfoWindow to display additional information -->
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

// Define marker options for each counter
const markerOptions = (counter) => {
  return {
    position: { lat: counter.latitude, lng: counter.longitude }, // Set the marker position based on the counter's coordinate
  }
}

// Define InfoWindow options for each counter
const infoWindowOptions = (counter) => {
  return {
    position: { lat: counter.latitude, lng: counter.longitude }, // Set the InfoWindow position to match the marker
  }
}
</script>
