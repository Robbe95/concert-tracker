import { useConcertsService } from '~/server/modules/concerts/services/concerts.service'
import { authProcedure } from '~/server/trpc/trpc'

export const getConcertsByUserId = authProcedure
  .query(async ({ ctx }) => {
    const concertsService = useConcertsService()
    const userId = ctx.user.id

    return await concertsService.getConcertsOfUserId(userId)
  })
