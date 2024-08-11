import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import router from './router'

const options = {
    config: {
      id: 'G-9QXLN75563'
    }
  }

createApp(App).use(router, VueGtag, options).mount('#app');
