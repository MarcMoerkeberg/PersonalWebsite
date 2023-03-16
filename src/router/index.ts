import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import { RoutePath } from '@/models/enums/RoutePath'

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePath.LandingPage,
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: RoutePath.Blog,
    name: 'blog',
    component: Blog
  },
  {
    path: RoutePath.About,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: RoutePath.Contact,
    name: 'contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
