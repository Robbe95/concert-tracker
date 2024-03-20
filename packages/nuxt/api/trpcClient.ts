import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'

import type { AppRouter } from '~/server/api/trpc/[trpc]'

export function useTrpc() {
  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ],
  })

  return client
}
