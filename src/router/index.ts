import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import HomeView from '../views/HomeView.vue'
import { RoutePathEnum } from '@/models/enums/RoutePathEnum'

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePathEnum.LandingPage,
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: RoutePathEnum.Home,
    name: 'home',
    component: HomeView
  },
  {
    path: RoutePathEnum.About,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
