import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Projects from '../views/ProjectsView.vue'
import Users from '../views/UsersView.vue'
import Judges from '../views/JudgesView.vue'

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
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/judges',
    name: 'judges',
    component: Judges
  }
]

const router = createRouter({
  mode: history,
  history: createWebHashHistory(),
  routes
})

export default router
