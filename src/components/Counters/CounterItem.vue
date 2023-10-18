<template>
  <div>
    <h2>Counter</h2>
    <ul>
      <li>Provider: <strong>{{ counter.provider }}</strong></li>
      <li>Area: <strong>{{ counter.area }}</strong></li>
      <li>SiteID: <strong>{{ counter.siteID }}</strong></li>
      <li>Location: <strong>{{ counter.location }}</strong></li>
      <li>Lat: <strong>{{ counter.latitude }}</strong></li>
      <li>Long: <strong>{{ counter.longitude }}</strong></li>
      <li>Start Time: <strong>{{ counter.startTime }}</strong></li>
      <li>End Time: <strong>{{ counter.endTime }}</strong></li>
      <li>Count: <strong>{{ counter.count }}</strong></li>
      <li>Usmart ID: <strong>{{ counter.usmart_id }}</strong></li>
    </ul>
  </div>
</template>

<script setup>
/* Props */
const props = defineProps({
  counter: {
    type: Object,
    required: true
  }
})

</script>