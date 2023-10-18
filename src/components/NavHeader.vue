<template>
  <nav class="bg-gray-800">
    <div class="mx-auto container">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center text-yellow-500">
            Cycling Counters
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                to="/"
                :class="{
                  'bg-gray-900': $route.path === '/', 
                  'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== '/'
                }"
                class="text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/about"
                :class="{
                  'bg-gray-900': $route.path === '/about', 
                  'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== '/about'
                }"
                class="text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
