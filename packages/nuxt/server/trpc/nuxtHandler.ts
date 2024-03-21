import { createNuxtApiHandler } from 'trpc-nuxt'

import { appRouter } from '../router/router'

export const nuxtHandler = createNuxtApiHandler({
  createContext: () => ({}),
  router: appRouter,
})
