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
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center text-yellow-500">
            Cycling Counters
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover-bg-gray-700 hover-text-white" -->
              <RouterLink
                to="/"
                class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Glasgow City Council
              </RouterLink>
              <RouterLink
                to="/john-muir-way"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                John Muir Way
              </RouterLink>
              <RouterLink
                to="/edinburgh-council"
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Edinburgh City Council
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="mobileMenuOpen" class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover-bg-gray-700 hover-text-white" -->
        <RouterLink
          @click="mobileMenuOpen = !mobileMenuOpen"
          to="/"
          class="text-white rounded-md px-3 py-2 text-sm font-medium flex w-full"
          :class="{'bg-gray-900': $route.path === '/', 'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== '/'}"
          aria-current="page"
        >
          Glasgow City Council
        </RouterLink>
        <RouterLink
          @click="mobileMenuOpen = !mobileMenuOpen"
          to="/john-muir-way"
          class="text-white rounded-md px-3 py-2 text-sm font-medium flex w-full"
          :class="{'bg-gray-900': $route.path === '/john-muir-way', 'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== '/john-muir-way'}"
        >
          John Muir Way
        </RouterLink>
        <RouterLink
          @click="mobileMenuOpen = !mobileMenuOpen"
          to="/about"
          class="text-white rounded-md px-3 py-2 text-sm font-medium flex w-full"
          :class="{'bg-gray-900': $route.path === '/edinburgh-council', 'text-gray-300 hover:bg-gray-700 hover:text-white': $route.path !== '/edinburgh-council'}"
        >
          Edinburgh City Council
        </RouterLink>
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
