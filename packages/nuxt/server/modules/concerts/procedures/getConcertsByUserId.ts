import { useConcertsService } from '~/server/modules/concerts/services/concerts.service'
import { authProcedure } from '~/server/trpc/trpc'
import { concert } from '~/shared/models/concerts/concert.model'

export const getConcertsByUserId = authProcedure
  .output(concert.array())
  .query(async ({ ctx }) => {
    const concertsService = useConcertsService()
    const userId = ctx.user.id
    const concerts = await concertsService.getConcertsOfUserId(userId)
    const flatConcerts = concerts.map(concert => ({ ...concert.concerts }))

    return flatConcerts
  })
