import { artistsRouter } from '~/server/modules/artists/router/artists.router'
import { authRouter } from '~/server/modules/auth/routers/auth.router'
import { router } from '~/server/trpc/trpc'

import { concertsRouter } from '../modules/concerts/routers/concerts.router'
import { filesRouter } from '../modules/files/router/files.router'

export const appRouter = router({
  artists: artistsRouter,
  auth: authRouter,
  concerts: concertsRouter,
  files: filesRouter,
})

export type AppRouter = typeof appRouter
