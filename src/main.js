import './assets/main.css'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router)
app.use(pinia)

app.component('GoogleMap', GoogleMap)
app.component('Marker', Marker)
app.component('InfoWindow', InfoWindow)

app.mount("#app")
