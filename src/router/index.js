import { createRouter, createWebHistory } from 'vue-router'

import Home from '@pages/Home.vue'
const Search = () => import('@pages/Search.vue')

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: 'default-layout',
      },
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        layout: 'with-navbar',
      },
    },
  ],
})
