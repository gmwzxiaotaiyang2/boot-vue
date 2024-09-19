import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import test from '@/views/test/index.vue'
import login from '@/views/login.vue'

const routes = [
  { path: '/', component: () => import('@/views/layouts/index.vue'), redirect: '/index', children: [
    {
      path: 'index',
      component: index,
    },
    { path: '/test', component: test },
  ] },

  { path: '/login', component: login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
