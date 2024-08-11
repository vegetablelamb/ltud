import { createRouter, createWebHistory } from 'vue-router'

import Ltud from './components/Ltud.vue'
import About from './components/About.vue'

const routes = [
  { path: '/', component: Ltud },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
linkActiveClass: 'is-active',
  routes,
})

export default router