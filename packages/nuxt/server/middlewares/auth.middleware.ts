import { TRPCError } from '@trpc/server'

import { t } from '../trpc/trpc'

export function getAuthMiddleware() {
  return t.middleware(({ ctx, next }) => {
    if (ctx.user == null) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next({
      ctx: {
        user: ctx.user,
      },
    })
  })
}
