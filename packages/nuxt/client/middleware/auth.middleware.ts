import { useSupabaseClient } from '~/client/api/useClientSupabase'
import { useTrpc } from '~/client/api/useTrpc'

export default defineNuxtRouteMiddleware(async () => {
  const supabase = useSupabaseClient()
  const { session, setSession } = useTrpc()

  try {
    if (session.value == null) {
      return navigateTo('/login')
    }

    const newSession = await supabase.auth.setSession(session.value)

    if (newSession.data.session == null) {
      return navigateTo('/login')
    }

    setSession(newSession.data.session)
  }
  catch (error) {
    console.error('Error in auth.middleware.ts', error)

    return navigateTo('/login')
  }
})
