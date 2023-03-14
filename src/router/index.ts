import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import { RoutePathEnum } from '@/models/enums/RoutePathEnum'

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePathEnum.LandingPage,
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: RoutePathEnum.Blog,
    name: 'blog',
    component: Blog
  },
  {
    path: RoutePathEnum.About,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: RoutePathEnum.Contact,
    name: 'contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
