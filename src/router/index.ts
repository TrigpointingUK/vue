import { createRouter, createWebHistory } from 'vue-router'
import { createAuthGuard } from '@auth0/auth0-vue'
import propsParser from 'vue-router-parse-props'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Trig from '@/views/Trig.vue'

// const createRoutes: Array<RouteRecordRaw> = (app) => [
const createRoutes: any = (app: any) => [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: createAuthGuard(app),
  },
  {
    path: '/trig/:trigid',
    name: 'trig',
    component: Trig,
    props: propsParser({ trigid: Number }),
    beforeEnter: createAuthGuard(app),
  },
  {
    path: '/user/:userid',
    name: 'user',
    component: Profile, // TODO: Sort this out
    props: propsParser({ userid: Number }),
  },
]

export const router = (app: any) =>
  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: createRoutes(app),
  })
