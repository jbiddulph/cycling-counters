import axios from 'axios'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counters: [],
  }),
  actions: {
    async fetchCounters() {
      const route = useRoute()
      let url = '';

      switch (route.path) {
        case '/':
          url = 'https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/657f6f93-932b-4851-ae21-830b321c185d/latest/urql'
          break;
        case '/john-muir-way':
          url = 'https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/4709d578-f2b6-4584-b8e2-4512c5936f65/latest/urql'
          break;
        case '/edinburgh-council':
          url = 'https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/7aa487cd-3cd5-405b-850e-1e2ac317816c/latest/urql'
          break;
        default:
          break;
      }

      if(url) {
        let res = await axios.get(url)
        if(res.data) {
          this.$state.counters = res.data
        }
      }
    },

    clearPosts() {
        this.$state.counters = []
    }
  },
  persist: true
})