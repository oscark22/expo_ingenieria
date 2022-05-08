import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Projects from '../views/ProjectsView.vue'
import Users from '../views/UsersView.vue'
import Judges from '../views/JudgesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { access: true }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: { access: true }
  },
  {
    path: '/users',
    name: 'users',
    component: Users
    // beforeEnter: (next) => {
    //   const type = localStorage.getItem('type')
    //   if (type === 'u') {
    //     return true
    //   }
    //   return false
    // }
  },
  {
    path: '/judges',
    name: 'judges',
    component: Judges
    // beforeEnter: (next) => {
    //   const type = localStorage.getItem('type')
    //   if (type === 'j') {
    //     return true
    //   }
    //   return false
    // }
  }
]

const router = createRouter({
  mode: history,
  history: createWebHashHistory(),
  routes
})
export default router
