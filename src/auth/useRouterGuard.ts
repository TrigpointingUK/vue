import { watchEffect } from 'vue'
import { RouteLocationNormalized } from 'vue-router'
import { useAuth } from './useAuthService'

// Uses boolean return and thus requires Vue 3 router.
// eslint-disable-next-line
export const useRouteGuard = (
  to: RouteLocationNormalized,
  // eslint-disable-next-line
  from: RouteLocationNormalized,
) => {
  const { isAuthenticated, loading, loginWithRedirect } = useAuth()

  const verify = () => {
    console.log('verifying')
    // If the user is authenticated, continue with the route
    if (isAuthenticated.value) {
      console.log('isAuthenticated')
      return true
    }

    console.log(to)
    // Otherwise, log in
    console.log('loginWithRedirect')
    loginWithRedirect({ appState: { targetUrl: to.fullPath } })
    return false
  }

  // If loading has already finished, check our auth state using `verify()`
  if (!loading.value) {
    return verify()
  }

  // Watch for the loading property to change before we check isAuthenticated
  watchEffect(() => {
    if (loading.value === false) {
      return verify()
    }
  })
}
