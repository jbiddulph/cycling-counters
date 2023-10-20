<template>
  <div class="chart-container overflow-x-auto">
    <div class="chart-scroll">
      <canvas id="counters" height="100"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  counters: {
    type: Array,
    required: true
  }
})

const countersRef = ref(props.counters)

onMounted(() => {
    new Chart(
    document.getElementById('counters'),
    {
      type: 'line',
      data: {
        labels: countersRef.value.map(row => {
          const date = new Date(row.startTime)
          return date.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Count',
            data: countersRef.value.map(row => row.count)
          }
        ]
      }
    }
  )
})
</script>

<style>
.chart-container {
  width: 100%;
  overflow-x: auto;
  height: auto;
}

.chart-scroll {
  width: 3400px;
}
</style>