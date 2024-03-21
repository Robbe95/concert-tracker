import { router } from '~/server/trpc/trpc'

import { concertsRouter } from '../modules/concerts/routers/concert.router'

export const appRouter = router({
  concerts: concertsRouter,
})

export type AppRouter = typeof appRouter
