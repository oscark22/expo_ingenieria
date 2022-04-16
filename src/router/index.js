import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Projects from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
