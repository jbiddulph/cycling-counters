<template>
  <NavHeader />
  <RouterView />
</template>

<script setup>
import NavHeader from './components/NavHeader.vue'
import { RouterView } from 'vue-router'
</script>