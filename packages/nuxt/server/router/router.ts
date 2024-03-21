import { authRouter } from '~/server/modules/auth/routers/auth.router'
import { router } from '~/server/trpc/trpc'

import { concertsRouter } from '../modules/concerts/routers/concert.router'

export const appRouter = router({
  auth: authRouter,
  concerts: concertsRouter,
})

export type AppRouter = typeof appRouter
