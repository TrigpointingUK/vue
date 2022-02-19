import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Install Bootstrap5
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.provide('sitename', process.env.VUE_APP_SITE)

app.mount('#app')
