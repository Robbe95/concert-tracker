import { createNuxtApiHandler } from 'trpc-nuxt'

import { createContext } from '../contexts/auth.context'
import { appRouter } from '../router/router'

export const nuxtHandler = createNuxtApiHandler({
  createContext,
  router: appRouter,
})
