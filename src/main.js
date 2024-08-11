import { createApp } from 'vue'
import VueGtag, { config } from 'vue-gtag'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(
    VueGtag,
    {
        appName: 'LTUD',
        pageTrackerScreenviewEnabled: true,
        config: {
            id: 'G-9QXLN75563'
        }
    },
    router).mount('#app')
