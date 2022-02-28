import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import { createAuth0 } from '@auth0/auth0-vue'

// Install Bootstrap5
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(store)
app.use(router(app))
app.config.performance = true
app.use(
  createAuth0({
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    client_id: process.env.VUE_APP_AUTH0_CLIENTID,
    redirect_uri: process.env.VUE_APP_AUTH0_CALLBACK,
    cacheLocation: 'localstorage',
    useRefreshTokens: true,
  }),
)

app.provide('sitename', process.env.VUE_APP_SITE)

app.mount('#app')
