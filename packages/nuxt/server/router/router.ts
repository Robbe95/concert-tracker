import { artistsRouter } from '~/server/modules/artists/router/artists.router'
import { authRouter } from '~/server/modules/auth/routers/auth.router'
import { router } from '~/server/trpc/trpc'

import { concertsRouter } from '../modules/concerts/routers/concerts.router'

export const appRouter = router({
  artists: artistsRouter,
  auth: authRouter,
  concerts: concertsRouter,
})

export type AppRouter = typeof appRouter
