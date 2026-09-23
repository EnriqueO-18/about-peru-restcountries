import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Toolbar from 'primevue/toolbar'
import Card from 'primevue/card'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue)
app.component('pv-toolbar', Toolbar)
app.component('pv-card', Card)
app.mount('#app')