import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Shared/Home'
import Login from '@/components/Auth/Login'
import { TokenService } from '@/services/storage.service'

Vue.use(Router)

export const router = new Router({
  mode: 'history', // Removing # from the url
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { onlyWhenLoggedOut: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/Auth/Register'),
      meta: { onlyWhenLoggedOut: true }
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
      path: '/verify/:email/:key',
      name: 'VerifyUser',
      component: () => import('@/components/User/VerifyUser')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/components/Pages/Search'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user',
      component: () => import('@/components/User/Dashboard'),
      meta: { requiresAuth: true },
      children:[
        {
          path:'',
          name:'Dashboard',
          components: {
            mainarea: () => import('@/components/User/Summary')
          }
        },
        {
          path: 'profile',
          name: 'Profile',
          components: {
            mainarea: () => import('@/components/User/Profile')
          }
        },
        {
          path: 'change-password',
          name: 'ChangePassword',
          components: {
            mainarea: () => import('@/components/User/ChangePassword')
          }
        }

      ]
    }
  ]
})

/**
 * Route checking for each request whether it requires user to be logged in or not
 */
router.beforeEach((to, from, next) => { 
  const isPrivate = to.matched.some(record => record.meta.requiresAuth)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = TokenService.getToken()
  
  // const loggedIn = !!userToken.token
  if (isPrivate && !loggedIn) {
    return next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next()
})
