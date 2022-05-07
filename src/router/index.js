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
    component: Users,
    meta: { access: false }
  },
  {
    path: '/judges',
    name: 'judges',
    component: Judges,
    meta: { access: false }
  }
]

const router = createRouter({
  mode: history,
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('auth')
  if (to.meta.access && auth) {
    next()
  }
})

export default router
