import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'

import type { AppRouter } from '~/server/entry'

export const client = createTRPCNuxtClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
})
