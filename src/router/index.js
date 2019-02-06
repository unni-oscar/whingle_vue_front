import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Shared/Home'
import Login from '@/components/Auth/Login'
import Profile from '@/components/User/Profile'
import { TokenService } from '@/services/storage.service'

Vue.use(Router)

export const router = new Router({
  mode: 'history', // Removing # from the url
  linkExactActiveClass: 'active',
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
      component: () => import('@/components/User/VerifyUser'),
      meta: { onlyWhenLoggedOut: true }

    },
    {
      path: '/reset-password',
      name: 'ForgetPassword',
      component: () => import('@/components/Auth/ResetPassword'),
      meta: { onlyWhenLoggedOut: true }
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/components/Pages/Search'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user',
      component: () => import('@/components/Elements/ContentWrap'),
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
          path: 'messages',
          name: 'Messages',
          components: {
            mainarea: () => import('@/components/User/Messages')
          }
        },
        {
          path: 'favourites',
          name: 'Favourites',
          components: {
            mainarea: () => import('@/components/User/Favourites')
          }
        },
        {
          path: 'preference',
          name: 'Preference',
          components: {
            mainarea: () => import('@/components/User/Preference')
          }
        },
        {
          path: 'subscription',
          name: 'Subscription',
          components: {
            mainarea: () => import('@/components/User/Subscription')
          }
        },
        {
          path: 'blacklist',
          name: 'Blacklist',
          components: {
            mainarea: () => import('@/components/User/Blacklist')
          }
        },
        {
          path: 'requests',
          name: 'Requests',
          components: {
            mainarea: () => import('@/components/User/Requests')
          }
        },
        {
          path: 'payments',
          name: 'Payments',
          components: {
            mainarea: () => import('@/components/User/Payments')
          }
        },
        {
          path: 'interests',
          name: 'Interests',
          components: {
            mainarea: () => import('@/components/User/Interests')
          }
        },
        {
          path: 'photos',
          name: 'Photos',
          components: {
            mainarea: () => import('@/components/User/Photos')
          }
        },
        {
          path: 'horoscope',
          name: 'Horoscope',
          components: {
            mainarea: () => import('@/components/User/Horoscope')
          }
        },
        {
          path: 'settings',
          name: 'Settings',
          components: {
            mainarea: () => import('@/components/User/Settings')
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
