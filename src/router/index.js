import { createRouter, createWebHistory } from 'vue-router'
import GlasgowCouncilView from '../views/GlasgowCouncilView.vue'
import JohnMuirWayView from '../views/JohnMuirWayView.vue'
import EdinburghCouncilView from '../views/EdinburghCouncilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'GlasgowCouncil',
      component: GlasgowCouncilView
    },
    {
      path: '/john-muir-way',
      name: 'JohnMuirWay',
      component: JohnMuirWayView
    },
    {
      path: '/edinburgh-council',
      name: 'EdinburghCouncil',
      component: EdinburghCouncilView
    }
  ]
})

export default router
