import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import PostsPage from '../pages/PostsPage.vue'
import PostsPageVuex from '../pages/PostsPageVuex.vue'
import PostIdPage from '../pages/PostIdPage.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/store',
    component: PostsPageVuex
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
