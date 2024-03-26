import type { Session } from '@supabase/supabase-js'
import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'

import type { AppRouter } from '~/server/router/router'

export function useTrpc() {
  const session = useCookie<Session>('session')

  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        headers() {
          return session.value !== null ? { Authorization: `Bearer ${session.value.access_token}` } : {}
        },
        url: '/api/trpc',
      }),
    ],
  })

  function setSession(newSession: Session) {
    session.value = newSession
  }

  return {
    session,
    setSession,
    trpc: client,
  }
}
