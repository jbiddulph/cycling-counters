<template>
  <div>
    <h2>Counter</h2>
    {{ counter }}
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