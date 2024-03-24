import { concertSelectSchema } from '~/server/modules/concerts/models/concert.model'
import { useConcertsService } from '~/server/modules/concerts/services/concerts.service'
import { authProcedure } from '~/server/trpc/trpc'

const concertsOutputSchema = concertSelectSchema.pick({ name: true })

export const getConcerts = authProcedure
  .output(concertsOutputSchema.array())
  .query(async () => {
    const concertsService = useConcertsService()

    return await concertsService.getConcerts()
  })
