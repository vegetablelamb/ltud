import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'

import Placeholder from './components/Placeholder.vue'
import Ltud from './components/Ltud.vue'

const routes = [
  { path: '/', component: Placeholder },
  { path: '/demo', component: Ltud },
]

const router = createRouter({
//   history: createMemoryHistory(),
history: createWebHashHistory(),
  routes,
})

export default router