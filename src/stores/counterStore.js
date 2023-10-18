import axios from 'axios'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counters: [],
  }),
  actions: {
    async fetchCounters() {
        let res = await axios.get('https://api.usmart.io/org/d1b773fa-d2bd-4830-b399-ecfd18e832f3/657f6f93-932b-4851-ae21-830b321c185d/latest/urql')
        if(res.data) {
          this.$state.counters = res.data
        }
    },

    clearPosts() {
        this.$state.counters = []
    }
  },
  persist: true
})