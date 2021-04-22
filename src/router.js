
import { createRouter, createWebHistory } from 'vue-router'
const a = () => import('./components/a.jsx')
const b = () => import('./components/b.jsx')
const routes = [
  {
    path: '/',
    name: 'a',
    component: a,
  },
  {
    path: '/b',
    name: 'b',
    component: b,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
