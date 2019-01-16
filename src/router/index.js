import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Shared/Home'
import Login from '@/components/Auth/Login'
// import Register from '@/components/Auth/Register'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/Auth/Register')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/Pages/About')
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: () => import('@/components/Pages/Pricing')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/components/Pages/Search'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/components/User/Dashboard'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ['/login', '/register']
  // const authRequired = !publicPages.includes(to.path)
  // // const loggedIn = localStorage.getItem('user')
  // // if (authRequired && !loggedIn) {
  // if (authRequired) {
  //   return next('/login')
  // }
  // next()
  // if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    // redirect to login page
    next({ name: 'login' })
    return
  }
  // if logged in redirect to dashboard
  // if(to.path === '/login' && store.state.isLoggedIn) {
  if (to.path === '/login') {
    next({ name: 'dashboard' })
    return
  }

  next()
})
