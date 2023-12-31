import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/Home.vue'),
        },
        {
          path: 'users',
          name: 'user-list',
          component: () => import('../views/users/UserList.vue'),
        }
      ]
    },    
  ]
})

export default router
