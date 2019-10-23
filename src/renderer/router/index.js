import Vue from 'vue'
import Router from 'vue-router'

import guard from '@/router/guard'

Vue.use(Router)

export default new Router({
  routes: [
    /**
     * No guards routers.
     */
    {
      path: '/',
      name: 'Preview',
      component: () => import('@/pages/Preview')
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('@/pages/Create')
    },
    {
      path: '/restore',
      name: 'Restore',
      component: () => import('@/pages/Restore')
    },
    {
      path: '/unlock',
      name: 'Unlock',
      component: () => import('@/pages/Unlock')
    },
    /**
     * Guard enable routers.
     */
    {
      path: '/home',
      name: 'Home',
      beforeEnter: guard,
      component: () => import('@/pages/Home')
    },
    {
      path: '/settings',
      name: 'settings',
      beforeEnter: guard,
      component: () => import('@/pages/Settings')
    },
    {
      path: '/settings/about',
      name: 'About',
      beforeEnter: guard,
      component: () => import('@/pages/settings/About')
    },
    {
      path: '/settings/general',
      name: 'General',
      beforeEnter: guard,
      component: () => import('@/pages/settings/General')
    },
    {
      path: '/settings/network',
      name: 'Network',
      beforeEnter: guard,
      component: () => import('@/pages/settings/Network')
    },
    {
      path: '/settings/security',
      name: 'security',
      beforeEnter: guard,
      component: () => import('@/pages/settings/Security')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
