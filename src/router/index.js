import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Example from '../views/ExampleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/example',
    name: 'example',
    component: Example
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
