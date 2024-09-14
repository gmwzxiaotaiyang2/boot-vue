import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import test from '@/views/test/index.vue'

const routes = [
  { path: '/', component: index },
  { path: '/test', component: test },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
